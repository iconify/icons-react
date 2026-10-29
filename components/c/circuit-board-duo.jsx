import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zdv2jph6r.css';
import '../../css/h/huqa8vmeu.css';
import '../../css/q/qpzat4bis.css';
import '../../css/l/lg-8n1num.css';
import '../../css/l/lq5robcdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zdv2jph6r"/><path class="huqa8vmeu wm-a"/><path class="qpzat4bis wm-a"/><path class="lg-8n1num"/><path class="lq5robcdj wm-a"/></g>`,
		"fallback": "withicons:circuit-board-duo",
	});
}

export default Component;
