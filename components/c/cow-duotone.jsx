import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_dzezboy.css';
import '../../css/f/f0f2ne0xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t_dzezboy"/><path class="f0f2ne0xx primary"/></g>`,
		"fallback": "iconaut:cow-duotone",
	});
}

export default Component;
