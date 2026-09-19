import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wx_m-_t9j.css';
import '../../css/c/c0clpkupl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wx_m-_t9j"/><path class="c0clpkupl"/></g>`,
		"fallback": "hugeicons:cellular-network-offline",
	});
}

export default Component;
