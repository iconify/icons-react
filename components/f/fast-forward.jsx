import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucocfyb3y.css';
import '../../css/w/w1pa0ebxw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucocfyb3y"/><path class="w1pa0ebxw"/></g>`,
		"fallback": "bi:fast-forward",
	});
}

export default Component;
