import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjpsczbmo.css';
import '../../css/f/f514x_3ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fjpsczbmo"/><path class="f514x_3ub"/></g>`,
		"fallback": "pixelarticons:backpack",
	});
}

export default Component;
