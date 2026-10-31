import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hc9r--a3l.css';
import '../../css/y/y0b5-nb-u.css';
import '../../css/f/faen-cbmq.css';
import '../../css/k/k2d1_1brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hc9r--a3l wm-shadow"/><path class="y0b5-nb-u"/><path class="faen-cbmq"/><path class="k2d1_1brv"/></g>`,
		"fallback": "withicons-retro:handshake",
	});
}

export default Component;
