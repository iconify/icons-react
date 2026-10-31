import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vjy5j5bpu.css';
import '../../css/e/e2zx9rcrb.css';
import '../../css/l/ld8j4vbeu.css';
import '../../css/y/yeb_ixbsr.css';
import '../../css/z/zejieu77p.css';
import '../../css/r/re2i4gcyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vjy5j5bpu wm-shadow"/><path class="e2zx9rcrb"/><path class="ld8j4vbeu"/><path class="yeb_ixbsr"/><path class="zejieu77p"/><path class="re2i4gcyb"/></g>`,
		"fallback": "withicons-retro:chess",
	});
}

export default Component;
