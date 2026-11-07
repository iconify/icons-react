import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y_9g5gbkl.css';
import '../../css/c/cx31vwdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y_9g5gbkl"/><path class="cx31vwdjv"/></g>`,
		"fallback": "solar:chat-square-like-line-duotone",
	});
}

export default Component;
