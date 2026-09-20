import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y65_bcbjk.css';
import '../../css/l/ly1l8ob8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y65_bcbjk"/><path class="ly1l8ob8x"/></g>`,
		"fallback": "mynaui:droplet-solid",
	});
}

export default Component;
