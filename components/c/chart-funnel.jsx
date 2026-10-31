import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/ww6u_nbyl.css';
import '../../css/b/bzh-t-bjn.css';
import '../../css/g/g05d-ibom.css';
import '../../css/w/wv_gk3esz.css';
import '../../css/h/h3g1mubax.css';
import '../../css/y/yojn4lbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow ww6u_nbyl"/><path class="bzh-t-bjn"/><path class="g05d-ibom"/><path class="wv_gk3esz"/><path class="h3g1mubax"/><path class="yojn4lbtr"/></g>`,
		"fallback": "withicons-retro:chart-funnel",
	});
}

export default Component;
