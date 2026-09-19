import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg70sybeh.css';
import '../../css/b/b80kepuqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hg70sybeh"/><path class="b80kepuqt"/></g>`,
		"fallback": "bi:bookmarks-fill",
	});
}

export default Component;
