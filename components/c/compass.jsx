import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/j/j1grweb9w.css';
import '../../css/q/q3u1zuboq.css';
import '../../css/q/q2ry6vbdx.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/g/g_w22obvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="j1grweb9w"/><path class="q3u1zuboq"/><path class="q2ry6vbdx"/><path class="x9x2k2-hi"/><path class="g_w22obvg"/></g>`,
		"fallback": "withicons-retro:compass",
	});
}

export default Component;
