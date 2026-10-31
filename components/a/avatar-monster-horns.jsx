import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nz8ejj8-b.css';
import '../../css/v/v820zcbdp.css';
import '../../css/q/q562_q5-v.css';
import '../../css/z/z7trbibch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nz8ejj8-b wm-shadow"/><path class="v820zcbdp"/><path class="q562_q5-v"/><path class="z7trbibch"/></g>`,
		"fallback": "withicons-retro:avatar-monster-horns",
	});
}

export default Component;
