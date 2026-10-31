import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te6p9ctda.css';
import '../../css/i/ip1axky2i.css';
import '../../css/i/ibsglmb5m.css';
import '../../css/c/cxtiu753i.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te6p9ctda wm-k"/><path class="ip1axky2i wm-shine"/><path class="ibsglmb5m wm-shine"/><path class="cxtiu753i wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-x",
	});
}

export default Component;
