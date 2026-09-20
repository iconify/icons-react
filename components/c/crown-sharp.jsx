import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2azncbxr.css';
import '../../css/d/djldg2y2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2azncbxr"/><path class="djldg2y2k"/></g>`,
		"fallback": "pixelarticons:crown-sharp",
	});
}

export default Component;
