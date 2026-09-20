import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj1lt4_6x.css';
import '../../css/m/mav80pboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mj1lt4_6x"/><path clip-rule="evenodd" class="mav80pboy"/></g>`,
		"fallback": "reicon:cart-check",
	});
}

export default Component;
