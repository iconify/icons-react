import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2bw2kbzy.css';
import '../../css/u/uu3kzorls.css';
import '../../css/c/cppqzcbcg.css';
import '../../css/r/ri3dx8gmy.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c2bw2kbzy wm-k"/><path class="uu3kzorls wm-shine"/><path class="cppqzcbcg wm-shine"/><path class="ri3dx8gmy wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-chart",
	});
}

export default Component;
