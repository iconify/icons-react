import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w5enc2k1w.css';
import '../../css/f/fedhgkbuh.css';
import '../../css/f/fd_12fy2w.css';
import '../../css/l/lq23_x48i.css';
import '../../css/h/hmxuwdbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w5enc2k1w"/><path class="fedhgkbuh wm-shine"/><path class="fd_12fy2w wm-k"/><path class="lq23_x48i wm-a"/><path class="hmxuwdbcw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:container",
	});
}

export default Component;
