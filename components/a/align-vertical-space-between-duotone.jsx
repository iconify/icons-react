import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nce-3ql5e.css';
import '../../css/i/ik4uj9bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nce-3ql5e secondary"/><path class="ik4uj9bfs primary"/></g>`,
		"fallback": "iconaut:align-vertical-space-between-duotone",
	});
}

export default Component;
