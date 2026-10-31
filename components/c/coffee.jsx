import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qrvvgkhmj.css';
import '../../css/r/r8_txqpyq.css';
import '../../css/i/iy4d6dwjv.css';
import '../../css/h/hsfj-0o0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qrvvgkhmj wm-shadow"/><path class="r8_txqpyq"/><path class="iy4d6dwjv"/><path class="hsfj-0o0s"/></g>`,
		"fallback": "withicons-retro:coffee",
	});
}

export default Component;
