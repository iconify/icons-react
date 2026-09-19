import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vazf5rbxx.css';
import '../../css/a/a16g9lbrm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vazf5rbxx"/><path class="a16g9lbrm"/></g>`,
		"fallback": "bi:arrow-clockwise",
	});
}

export default Component;
