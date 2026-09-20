import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bs00u1bfs.css';
import '../../css/k/ku9g8wbnx.css';
import '../../css/y/yr-jb4bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bs00u1bfs"/><path class="ku9g8wbnx"/><path clip-rule="evenodd" class="yr-jb4bim"/></g>`,
		"fallback": "solar:flip-vertical-bold",
	});
}

export default Component;
