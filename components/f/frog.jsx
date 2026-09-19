import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy9o3bilf.css';
import '../../css/l/le82nlbvh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yy9o3bilf"/><path class="le82nlbvh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:frog",
	});
}

export default Component;
