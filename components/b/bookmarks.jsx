import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m98iebcmq.css';
import '../../css/u/uy4wp4b0d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m98iebcmq"/><path class="uy4wp4b0d"/></g>`,
		"fallback": "bi:bookmarks",
	});
}

export default Component;
