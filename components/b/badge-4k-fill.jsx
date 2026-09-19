import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttfbg1b4i.css';
import '../../css/r/rayeo3pqz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ttfbg1b4i"/><path class="rayeo3pqz"/></g>`,
		"fallback": "bi:badge-4k-fill",
	});
}

export default Component;
