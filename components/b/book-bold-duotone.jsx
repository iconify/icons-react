import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q69zxwbhz.css';
import '../../css/p/poyhot0um.css';
import '../../css/z/z2ntfxdat.css';
import '../../css/u/ub6dtb6xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q69zxwbhz"/><path class="poyhot0um"/><path class="z2ntfxdat"/><path class="ub6dtb6xc"/></g>`,
		"fallback": "solar:book-bold-duotone",
	});
}

export default Component;
