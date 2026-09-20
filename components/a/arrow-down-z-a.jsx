import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4uyplk2k.css';
import '../../css/m/mcrj1tixf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q4uyplk2k"/><path class="mcrj1tixf"/></g>`,
		"fallback": "pixelarticons:arrow-down-z-a",
	});
}

export default Component;
