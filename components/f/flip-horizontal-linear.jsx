import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qggxhn8go.css';
import '../../css/j/jknwc2bjg.css';
import '../../css/a/aqdbg2upz.css';
import '../../css/k/k-kwsetci.css';
import '../../css/w/wcfaz7lnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qggxhn8go"/><path class="jknwc2bjg"/><path class="aqdbg2upz"/><path class="k-kwsetci"/><path class="wcfaz7lnl"/></g>`,
		"fallback": "solar:flip-horizontal-linear",
	});
}

export default Component;
