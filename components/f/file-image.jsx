import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnllf5bfp.css';
import '../../css/s/s1ww3gkzw.css';
import '../../css/i/idj_8u8kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vnllf5bfp wm-k"/><path class="s1ww3gkzw wm-shine"/><path class="idj_8u8kx wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-image",
	});
}

export default Component;
