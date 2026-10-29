import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/g/golyw5t2b.css';
import '../../css/q/q4is1ubpc.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/y/yihs_iw5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="golyw5t2b wm-a"/><path class="q4is1ubpc wm-a"/><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="wm-a yihs_iw5i"/></g>`,
		"fallback": "withicons:avatar-woman-duo",
	});
}

export default Component;
