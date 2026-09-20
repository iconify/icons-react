import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnxi2rbnm.css';
import '../../css/g/g_knt3b7l.css';
import '../../css/k/kp0ka7hxu.css';
import '../../css/y/y-v_afx5y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g class="wnxi2rbnm"><path clip-rule="evenodd" class="g_knt3b7l"/><path class="kp0ka7hxu"/></g><path clip-rule="evenodd" class="y-v_afx5y"/></g>`,
		"fallback": "streamline-color:airport-security-flat",
	});
}

export default Component;
