import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/ysv6qubop.css';
import '../../css/v/vp9y1nkzk.css';
import '../../css/f/fy889v-sw.css';
import '../../css/x/x5l44wkxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ysv6qubop"/><path class="vp9y1nkzk"/><path class="fy889v-sw"/><path class="x5l44wkxa"/></g>`,
		"fallback": "akar-icons:calculator",
	});
}

export default Component;
