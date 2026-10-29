import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dnnmvmbax.css';
import '../../css/j/jrcx8qb1e.css';
import '../../css/s/s8xb1n54b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dnnmvmbax"/><path class="jrcx8qb1e wm-k"/><path class="s8xb1n54b wm-a"/></g>`,
		"fallback": "withicons:avatar-ghost-sketch",
	});
}

export default Component;
