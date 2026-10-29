import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tv42nmbeb.css';
import '../../css/w/wik0hzjja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tv42nmbeb wm-k"/><path class="wik0hzjja wm-a"/></g>`,
		"fallback": "withicons:dragon-head-solid",
	});
}

export default Component;
