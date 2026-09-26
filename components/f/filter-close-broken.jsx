import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j55mge9fo.css';
import '../../css/c/cna71lbwk.css';
import '../../css/g/g3r_rtbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j55mge9fo"/><path class="cna71lbwk"/><path class="g3r_rtbqs"/></g>`,
		"fallback": "solar:filter-close-broken",
	});
}

export default Component;
