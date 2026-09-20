import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wvc8_zo-w.css';
import '../../css/u/us_lcey2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wvc8_zo-w"/><path class="us_lcey2a"/></g>`,
		"fallback": "rivet-icons:download",
	});
}

export default Component;
