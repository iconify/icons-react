import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n_qx3vb4d.css';
import '../../css/k/k09k0kl2z.css';
import '../../css/f/f_xp8vzas.css';
import '../../css/j/jzbi23d3t.css';
import '../../css/u/uvlti2bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n_qx3vb4d wm-shadow"/><path class="k09k0kl2z"/><path class="f_xp8vzas"/><path class="jzbi23d3t"/><path class="uvlti2bsh"/></g>`,
		"fallback": "withicons-retro:api",
	});
}

export default Component;
