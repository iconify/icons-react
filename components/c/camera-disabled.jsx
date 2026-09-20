import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl_zx02mu.css';
import '../../css/u/u_9u68bgf.css';
import '../../css/i/i9d4f1bhz.css';
import '../../css/x/x_861_b_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wl_zx02mu"/><path class="u_9u68bgf"/><path class="i9d4f1bhz"/><path class="x_861_b_q"/></g>`,
		"fallback": "streamline-color:camera-disabled",
	});
}

export default Component;
