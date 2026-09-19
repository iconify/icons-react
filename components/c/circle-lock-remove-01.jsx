import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y6wpjrbdx.css';
import '../../css/u/udgy1abhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y6wpjrbdx"/><path class="udgy1abhy"/></g>`,
		"fallback": "hugeicons:circle-lock-remove-01",
	});
}

export default Component;
