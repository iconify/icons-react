import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvj2d0gvb.css';
import '../../css/s/szjelmklw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvj2d0gvb"/><path class="szjelmklw"/></g>`,
		"fallback": "bi:6-square-fill",
	});
}

export default Component;
