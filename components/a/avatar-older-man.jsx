import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j5qe5wrwz.css';
import '../../css/q/qyq1e1b0d.css';
import '../../css/i/izmq6-b4l.css';
import '../../css/o/oun42dbce.css';
import '../../css/j/j55ny-cty.css';
import '../../css/o/o6ku2ytlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j5qe5wrwz wm-shadow"/><path class="qyq1e1b0d"/><path class="izmq6-b4l"/><path class="oun42dbce"/><path class="j55ny-cty wm-shine"/><path class="o6ku2ytlo"/></g>`,
		"fallback": "withicons-retro:avatar-older-man",
	});
}

export default Component;
