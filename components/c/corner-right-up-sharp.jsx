import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlzp3pbpr.css';
import '../../css/r/rg3xjqbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rlzp3pbpr"/><path class="rg3xjqbwk"/></g>`,
		"fallback": "pixelarticons:corner-right-up-sharp",
	});
}

export default Component;
