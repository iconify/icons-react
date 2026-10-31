import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfyb8bkre.css';
import '../../css/u/u2p9y8kpc.css';
import '../../css/q/qys2q-blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfyb8bkre wm-k"/><path class="u2p9y8kpc wm-shine"/><path class="qys2q-blz wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-cat",
	});
}

export default Component;
