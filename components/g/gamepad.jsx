import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0r0167jg.css';
import '../../css/c/c8aj-8bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0r0167jg"/><path class="c8aj-8bur"/></g>`,
		"fallback": "pixelarticons:gamepad",
	});
}

export default Component;
