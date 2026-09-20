import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2c87db2k.css';
import '../../css/z/z0ll7vtyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y2c87db2k"/><path class="z0ll7vtyk"/></g>`,
		"fallback": "pixelarticons:corner-down-right-sharp",
	});
}

export default Component;
