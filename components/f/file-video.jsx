import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir2usgbdh.css';
import '../../css/o/owz0w1w-e.css';
import '../../css/p/p0d_zwbuc.css';
import '../../css/c/c34fvcchc.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ir2usgbdh wm-k"/><path class="owz0w1w-e wm-shine"/><path class="p0d_zwbuc wm-shine"/><path class="c34fvcchc wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-video",
	});
}

export default Component;
