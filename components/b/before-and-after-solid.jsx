import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ikbg8bbpk.css';
import '../../css/e/ezr0yx-zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ikbg8bbpk"/><path class="ezr0yx-zp"/></g>`,
		"fallback": "iconaut:before-and-after-solid",
	});
}

export default Component;
