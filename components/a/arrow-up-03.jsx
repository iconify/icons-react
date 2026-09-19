import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xnwp-xx6w.css';
import '../../css/f/flnl_-bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xnwp-xx6w"/><path class="flnl_-bho"/></g>`,
		"fallback": "hugeicons:arrow-up-03",
	});
}

export default Component;
