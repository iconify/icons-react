import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2da0c0rv.css';
import '../../css/u/us9g4xbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r2da0c0rv"/><path class="us9g4xbzz"/></g>`,
		"fallback": "solar:chat-square-arrow-bold",
	});
}

export default Component;
