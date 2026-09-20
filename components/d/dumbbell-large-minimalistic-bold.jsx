import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-ixuow2c.css';
import '../../css/n/nkselhtkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-ixuow2c"/><path clip-rule="evenodd" class="nkselhtkr"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-bold",
	});
}

export default Component;
