import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7psu5c_g.css';
import '../../css/r/rl1j0pb_s.css';
import '../../css/a/a_kyacp_u.css';
import '../../css/j/jrb5ko5ha.css';
import '../../css/d/dk785flvr.css';
import '../../css/y/yi52jpuhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7psu5c_g wm-k"/><path class="rl1j0pb_s wm-k"/><path class="a_kyacp_u wm-k"/><path class="jrb5ko5ha wm-shadow"/><path class="dk785flvr wm-shine"/><path class="wm-shine yi52jpuhg"/></g>`,
		"fallback": "withicons-valentine:archive",
	});
}

export default Component;
