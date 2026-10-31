import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pz316c71r.css';
import '../../css/h/hr5gvvb0h.css';
import '../../css/m/mb08_zbkx.css';
import '../../css/r/ry_oy0a3b.css';
import '../../css/a/ag8fmwblh.css';
import '../../css/p/p0o_90bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pz316c71r wm-shadow"/><path class="hr5gvvb0h"/><path class="mb08_zbkx"/><path class="ry_oy0a3b"/><path class="ag8fmwblh"/><path class="p0o_90bxf"/></g>`,
		"fallback": "withicons-retro:grape",
	});
}

export default Component;
