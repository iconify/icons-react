import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj4khcc8z.css';
import '../../css/r/rn6hiv_ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fj4khcc8z"/><path class="rn6hiv_ua"/></g>`,
		"fallback": "solar:incoming-call-outline",
	});
}

export default Component;
