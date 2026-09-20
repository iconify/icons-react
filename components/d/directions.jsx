import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxsluibud.css';
import '../../css/m/mg3ip9u7s.css';
import '../../css/r/rcot2bbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxsluibud"/><path class="mg3ip9u7s"/><path class="rcot2bbwe"/></g>`,
		"fallback": "pixelarticons:directions",
	});
}

export default Component;
