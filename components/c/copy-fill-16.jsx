import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rt9ypx51y.css';
import '../../css/o/o1b2wxb9u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rt9ypx51y"/><rect class="o1b2wxb9u"/></g>`,
		"fallback": "garden:copy-fill-16",
	});
}

export default Component;
