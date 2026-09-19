import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1pjl2b1d.css';
import '../../css/n/nx54768oa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j1pjl2b1d"/><path class="nx54768oa"/></g>`,
		"fallback": "pepicons:duplicate",
	});
}

export default Component;
