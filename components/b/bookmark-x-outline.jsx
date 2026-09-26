import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zhxvkkbwt.css';
import '../../css/y/yy37v6bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zhxvkkbwt"/><path clip-rule="evenodd" class="yy37v6bqv"/></g>`,
		"fallback": "solar:bookmark-x-outline",
	});
}

export default Component;
