import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tsl7m5b1t.css';
import '../../css/v/vy7z0rbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tsl7m5b1t"/><path class="vy7z0rbrj"/></g>`,
		"fallback": "pixelarticons:blocks-sharp",
	});
}

export default Component;
