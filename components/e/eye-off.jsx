import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o6wi3cc5q.css';
import '../../css/o/okasvrlav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o6wi3cc5q"/><path class="okasvrlav"/></g>`,
		"fallback": "pixelarticons:eye-off",
	});
}

export default Component;
