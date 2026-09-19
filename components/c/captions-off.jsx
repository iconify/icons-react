import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kjx8ezb0g.css';
import '../../css/q/qssd2clzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kjx8ezb0g"/><path class="qssd2clzd"/></g>`,
		"fallback": "hugeicons:captions-off",
	});
}

export default Component;
