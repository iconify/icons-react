import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cke2r7bqz.css';
import '../../css/c/cwufh6bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cke2r7bqz"/><path class="cwufh6bue"/></g>`,
		"fallback": "solar:dislike-bold",
	});
}

export default Component;
