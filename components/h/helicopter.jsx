import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnhf3hv1q.css';
import '../../css/g/g-0tq0buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pnhf3hv1q"/><path class="g-0tq0buw"/></g>`,
		"fallback": "pixelarticons:helicopter",
	});
}

export default Component;
