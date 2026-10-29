import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kp2zuh21h.css';
import '../../css/p/ps-kh8b3d.css';
import '../../css/c/csigaqbdp.css';
import '../../css/k/k2znbrbdv.css';
import '../../css/z/z9t-8ybgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kp2zuh21h wm-deco"/><path class="ps-kh8b3d wm-deco"/><path class="csigaqbdp wm-deco"/><path class="k2znbrbdv wm-k"/><path class="wm-a z9t-8ybgp"/></g>`,
		"fallback": "withicons:avatar-monster-horns-blueprint",
	});
}

export default Component;
