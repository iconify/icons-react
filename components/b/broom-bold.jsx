import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oq4ae9idz.css';
import '../../css/e/ek8x97ygo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oq4ae9idz"/><path class="ek8x97ygo"/></g>`,
		"fallback": "solar:broom-bold",
	});
}

export default Component;
