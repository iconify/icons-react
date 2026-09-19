import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-gih8m5c.css';
import '../../css/n/na8t3f2qk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-gih8m5c"/><path class="na8t3f2qk"/></g>`,
		"fallback": "bi:caret-left-square",
	});
}

export default Component;
