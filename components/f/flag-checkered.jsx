import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8vjv-1sy.css';
import '../../css/x/xh6ytibsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8vjv-1sy"/><path class="xh6ytibsf"/></g>`,
		"fallback": "at-icons:flag-checkered",
	});
}

export default Component;
