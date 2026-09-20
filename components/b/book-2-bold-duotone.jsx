import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub6dtb6xc.css';
import '../../css/j/jejzw4uym.css';
import '../../css/p/poyhot0um.css';
import '../../css/z/z2ntfxdat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ub6dtb6xc"/><path class="jejzw4uym"/><path class="poyhot0um"/><path class="z2ntfxdat"/></g>`,
		"fallback": "solar:book-2-bold-duotone",
	});
}

export default Component;
