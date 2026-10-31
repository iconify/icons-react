import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0ji564to.css';
import '../../css/m/mr740qb7e.css';
import '../../css/l/l-w2okima.css';
import '../../css/i/i5vlfbclw.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0ji564to wm-k"/><path class="mr740qb7e wm-shine"/><path class="l-w2okima wm-shine"/><path class="i5vlfbclw wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-up",
	});
}

export default Component;
