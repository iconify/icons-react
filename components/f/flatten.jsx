import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_bd5jmqc.css';
import '../../css/t/ts0yy6buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_bd5jmqc"/><path class="ts0yy6buc"/></g>`,
		"fallback": "pixelarticons:flatten",
	});
}

export default Component;
