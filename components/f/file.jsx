import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyd59tdzt.css';
import '../../css/z/z84mmwv5l.css';
import '../../css/l/l43o7mb-f.css';
import '../../css/c/cc9jnn-2r.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vyd59tdzt wm-k"/><path class="wm-shine z84mmwv5l"/><path class="l43o7mb-f wm-shine"/><path class="cc9jnn-2r wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file",
	});
}

export default Component;
