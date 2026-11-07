import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cx31vwdjv.css';
import '../../css/i/ix-5pbyzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cx31vwdjv"/><path class="ix-5pbyzd"/></g>`,
		"fallback": "solar:chat-square-close-line-duotone",
	});
}

export default Component;
