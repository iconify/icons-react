import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6cpixbhh.css';
import '../../css/t/t0t0fxb6u.css';
import '../../css/c/cl15l39zf.css';
import '../../css/g/ggy-ngbuv.css';
import '../../css/u/u1e4q_b5m.css';
import '../../css/n/niktey0vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6cpixbhh"/><path class="t0t0fxb6u"/><path class="cl15l39zf"/><path class="ggy-ngbuv"/><path class="u1e4q_b5m"/><path class="niktey0vw"/></g>`,
		"fallback": "streamline-cyber-color:headset-user",
	});
}

export default Component;
