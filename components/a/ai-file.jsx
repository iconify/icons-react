import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yr3koubjv.css';
import '../../css/t/th2gttihc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yr3koubjv"/><path class="th2gttihc"/></g>`,
		"fallback": "pixelarticons:ai-file",
	});
}

export default Component;
