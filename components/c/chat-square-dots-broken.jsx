import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iedscrbxp.css';
import '../../css/e/ejdkgccas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iedscrbxp"/><path class="ejdkgccas"/></g>`,
		"fallback": "solar:chat-square-dots-broken",
	});
}

export default Component;
