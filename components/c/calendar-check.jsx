import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vw8iz0zxk.css';
import '../../css/t/t8xn--euq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vw8iz0zxk"/><path class="t8xn--euq"/></g>`,
		"fallback": "bi:calendar-check",
	});
}

export default Component;
