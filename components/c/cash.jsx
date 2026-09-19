import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/no0fhnmcd.css';
import '../../css/o/oeb9u6b4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="no0fhnmcd"/><path class="oeb9u6b4x"/></g>`,
		"fallback": "bi:cash",
	});
}

export default Component;
