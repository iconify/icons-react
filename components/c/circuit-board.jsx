import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lg-8n1num.css';
import '../../css/j/jsyt9abxh.css';
import '../../css/q/qpzat4bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lg-8n1num"/><path class="jsyt9abxh wm-a"/><path class="qpzat4bis wm-a"/></g>`,
		"fallback": "withicons:circuit-board",
	});
}

export default Component;
