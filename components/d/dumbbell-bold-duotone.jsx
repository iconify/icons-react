import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/keas6eb_s.css';
import '../../css/q/q1n31bbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="keas6eb_s"/><path class="q1n31bbne"/></g>`,
		"fallback": "solar:dumbbell-bold-duotone",
	});
}

export default Component;
