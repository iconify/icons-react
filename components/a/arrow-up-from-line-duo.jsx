import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bppo2fb_d.css';
import '../../css/d/d3em8vr4w.css';
import '../../css/t/te09yrbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bppo2fb_d"/><path class="d3em8vr4w"/><path class="te09yrbly"/></g>`,
		"fallback": "iconaut:arrow-up-from-line-duo",
	});
}

export default Component;
