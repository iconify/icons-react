import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r837omb-t.css';
import '../../css/g/glsokcc4t.css';
import '../../css/z/zoc0r_xnf.css';
import '../../css/u/u2q5ayb7h.css';
import '../../css/u/u_flykewq.css';
import '../../css/m/m5y869bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r837omb-t wm-shadow"/><path class="glsokcc4t"/><path class="zoc0r_xnf"/><path class="u2q5ayb7h"/><path class="u_flykewq"/><path class="m5y869bec"/></g>`,
		"fallback": "withicons-retro:candy-corn",
	});
}

export default Component;
