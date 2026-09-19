import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nr4991bfs.css';
import '../../css/u/ud-4lqb9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nr4991bfs"/><path class="ud-4lqb9t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dog",
	});
}

export default Component;
