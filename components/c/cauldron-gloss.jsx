import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c-ttospkb.css';
import '../../css/w/wude1rb1k.css';
import '../../css/s/s_j_ghb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c-ttospkb wm-k"/><path class="wm-a wude1rb1k"/><path class="s_j_ghb2w wm-s"/></g>`,
		"fallback": "withicons:cauldron-gloss",
	});
}

export default Component;
