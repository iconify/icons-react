import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/c/cyx_r7_ek.css';
import '../../css/y/y2tpbcvnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="cyx_r7_ek wm-a"/><path class="wm-a y2tpbcvnd"/></g>`,
		"fallback": "withicons:avatar-woman-curly",
	});
}

export default Component;
