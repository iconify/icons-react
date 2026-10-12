import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nltzyzbxq.css';
import '../../css/p/px77-ls_q.css';
import '../../css/n/nw3lmibih.css';
import '../../css/y/ys26-wbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nltzyzbxq"/><path class="px77-ls_q"/><path class="nw3lmibih"/><path class="ys26-wbpr"/></g>`,
		"fallback": "andrsrxn:ice-cream",
	});
}

export default Component;
