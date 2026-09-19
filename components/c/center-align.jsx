import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgwizui3a.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgwizui3a"/>`,
		"fallback": "fontisto:center-align",
	});
}

export default Component;
