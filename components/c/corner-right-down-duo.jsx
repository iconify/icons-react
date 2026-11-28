import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j0y8k0boh.css';
import '../../css/n/nky2ijboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j0y8k0boh"/><path class="nky2ijboj"/></g>`,
		"fallback": "iconaut:corner-right-down-duo",
	});
}

export default Component;
