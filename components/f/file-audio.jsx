import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5d75qopw.css';
import '../../css/c/c-8ym_ojo.css';
import '../../css/g/g_sp_tggn.css';
import '../../css/y/yjoet1kri.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5d75qopw wm-k"/><path class="c-8ym_ojo wm-shine"/><path class="g_sp_tggn wm-shine"/><path class="wm-shine yjoet1kri"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-audio",
	});
}

export default Component;
