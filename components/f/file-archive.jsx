import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_1rcub3k.css';
import '../../css/r/rkswy64ch.css';
import '../../css/b/b48ln_i9r.css';
import '../../css/x/x69irwrcv.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_1rcub3k wm-k"/><path class="rkswy64ch wm-shine"/><path class="b48ln_i9r wm-shine"/><path class="wm-shine x69irwrcv"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-archive",
	});
}

export default Component;
