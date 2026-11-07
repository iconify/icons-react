import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xipcs5o8d.css';
import '../../css/c/cx31vwdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xipcs5o8d"/><path class="cx31vwdjv"/></g>`,
		"fallback": "solar:chat-square-dots-line-duotone",
	});
}

export default Component;
