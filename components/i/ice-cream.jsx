import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t6q0p4bxh.css';
import '../../css/e/efpyzhttl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t6q0p4bxh"/><path class="efpyzhttl wm-a"/></g>`,
		"fallback": "withicons:ice-cream",
	});
}

export default Component;
