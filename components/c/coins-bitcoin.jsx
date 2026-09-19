import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/enxljlbeo.css';
import '../../css/h/h785cebdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="enxljlbeo"/><path class="h785cebdi"/></g>`,
		"fallback": "hugeicons:coins-bitcoin",
	});
}

export default Component;
