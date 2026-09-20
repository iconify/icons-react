import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4ht83b_t.css';
import '../../css/x/x-qd7swei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u4ht83b_t"/><path class="x-qd7swei"/></g>`,
		"fallback": "majesticons:folder-open-line",
	});
}

export default Component;
