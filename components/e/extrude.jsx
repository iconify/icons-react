import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey-o1i8th.css';
import '../../css/u/uyzurub7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ey-o1i8th"/><path class="uyzurub7k"/></g>`,
		"fallback": "at-icons:extrude",
	});
}

export default Component;
