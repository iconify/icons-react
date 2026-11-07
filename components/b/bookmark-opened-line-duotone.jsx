import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o4bztxbcd.css';
import '../../css/w/w3kf-ubcm.css';
import '../../css/k/k-a-0dber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o4bztxbcd"/><path class="w3kf-ubcm"/><path class="k-a-0dber"/></g>`,
		"fallback": "solar:bookmark-opened-line-duotone",
	});
}

export default Component;
