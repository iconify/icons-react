import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/q/qk844vlin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="qk844vlin wm-a"/></g>`,
		"fallback": "withicons:avatar-man",
	});
}

export default Component;
