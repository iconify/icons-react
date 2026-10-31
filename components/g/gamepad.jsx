import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ab4u36bki.css';
import '../../css/j/jn4exerel.css';
import '../../css/c/cug3_1n-c.css';
import '../../css/m/m2139qo2q.css';
import '../../css/d/d5w-q0byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ab4u36bki wm-shadow"/><path class="jn4exerel"/><path class="cug3_1n-c"/><path class="m2139qo2q"/><path class="d5w-q0byt"/></g>`,
		"fallback": "withicons-retro:gamepad",
	});
}

export default Component;
