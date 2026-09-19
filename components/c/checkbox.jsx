import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht-699b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht-699b4d"/>`,
		"fallback": "bxs:checkbox",
	});
}

export default Component;
