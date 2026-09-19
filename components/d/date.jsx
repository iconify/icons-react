import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3ff8hyy.css';
import '../../css/y/y_b4318bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx3ff8hyy"/><path class="y_b4318bi"/>`,
		"fallback": "fontisto:date",
	});
}

export default Component;
