import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xoaxl7bum.css';
import '../../css/q/qa7sxjbbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xoaxl7bum"/><path class="qa7sxjbbn"/></g>`,
		"fallback": "bi:card-list",
	});
}

export default Component;
