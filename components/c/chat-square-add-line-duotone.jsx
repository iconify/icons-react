import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cx31vwdjv.css';
import '../../css/w/w08-7ybrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cx31vwdjv"/><path class="w08-7ybrp"/></g>`,
		"fallback": "solar:chat-square-add-line-duotone",
	});
}

export default Component;
