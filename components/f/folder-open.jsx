import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5qe7gbrm.css';
import '../../css/d/dohlm2b5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5qe7gbrm"/><path class="dohlm2b5t"/></g>`,
		"fallback": "at-icons:folder-open",
	});
}

export default Component;
