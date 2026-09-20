import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gpcfd5bbk.css';
import '../../css/h/hw6ersahy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gpcfd5bbk"/><path class="hw6ersahy"/></g>`,
		"fallback": "pixelarticons:grid-3x3",
	});
}

export default Component;
