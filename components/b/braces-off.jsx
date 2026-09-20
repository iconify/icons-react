import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3lf9pgvr.css';
import '../../css/x/x5ewpcb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d3lf9pgvr"/><path class="x5ewpcb0v"/></g>`,
		"fallback": "pixelarticons:braces-off",
	});
}

export default Component;
