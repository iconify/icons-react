import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h33nx2b9p.css';
import '../../css/p/p_-s8q_qf.css';
import '../../css/y/yyibrwy7c.css';
import '../../css/i/i4dt8elwi.css';
import '../../css/f/ful6b1bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h33nx2b9p wm-shadow"/><path class="p_-s8q_qf"/><path class="yyibrwy7c"/><path class="i4dt8elwi"/><path class="ful6b1bjk"/></g>`,
		"fallback": "withicons-retro:beef",
	});
}

export default Component;
