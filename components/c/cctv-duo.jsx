import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vr3h74sgw.css';
import '../../css/r/rajosnf3p.css';
import '../../css/d/db38wxdje.css';
import '../../css/i/ipr557bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vr3h74sgw"/><path class="rajosnf3p"/><path class="db38wxdje wm-a"/><path class="ipr557bpu"/></g>`,
		"fallback": "withicons:cctv-duo",
	});
}

export default Component;
