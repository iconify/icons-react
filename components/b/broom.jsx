import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ik3rcq8gk.css';
import '../../css/j/j28vspsyx.css';
import '../../css/c/ch63jbz1a.css';
import '../../css/g/g2ez45bji.css';
import '../../css/q/q88db6m0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ik3rcq8gk wm-shadow"/><path class="j28vspsyx"/><path class="ch63jbz1a"/><path class="g2ez45bji"/><path class="q88db6m0k"/></g>`,
		"fallback": "withicons-retro:broom",
	});
}

export default Component;
