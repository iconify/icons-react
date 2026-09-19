import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xta04vqug.css';
import '../../css/s/sf96bdqjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xta04vqug"/><path class="sf96bdqjt"/></g>`,
		"fallback": "hugeicons:bluetooth-not-connected",
	});
}

export default Component;
