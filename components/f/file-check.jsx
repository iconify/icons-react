import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dywk60bfr.css';
import '../../css/i/ik9g-ubgo.css';
import '../../css/g/g66t9rb4f.css';
import '../../css/u/ue7nl_7uk.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dywk60bfr wm-k"/><path class="ik9g-ubgo wm-shine"/><path class="g66t9rb4f wm-shine"/><path class="ue7nl_7uk wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-check",
	});
}

export default Component;
