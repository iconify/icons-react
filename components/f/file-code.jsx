import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgqrr6scr.css';
import '../../css/l/l69tgy0if.css';
import '../../css/r/rmhlesbhl.css';
import '../../css/m/mti5rsbna.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgqrr6scr wm-k"/><path class="l69tgy0if wm-shine"/><path class="rmhlesbhl wm-shine"/><path class="mti5rsbna wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-code",
	});
}

export default Component;
