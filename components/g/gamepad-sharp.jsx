import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pbocmbbjo.css';
import '../../css/c/c8aj-8bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pbocmbbjo"/><path class="c8aj-8bur"/></g>`,
		"fallback": "pixelarticons:gamepad-sharp",
	});
}

export default Component;
