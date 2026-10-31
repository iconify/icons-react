import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gkxbgqb0l.css';
import '../../css/t/tx8onvulw.css';
import '../../css/x/x9a9rzdfe.css';
import '../../css/s/sl2vgvbpb.css';
import '../../css/o/o4y1xcbsa.css';
import '../../css/c/cbbfx_a8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gkxbgqb0l wm-shadow"/><path class="tx8onvulw"/><path class="x9a9rzdfe"/><path class="sl2vgvbpb"/><path class="o4y1xcbsa"/><path class="cbbfx_a8m wm-s"/></g>`,
		"fallback": "withicons-retro:cloud-upload",
	});
}

export default Component;
