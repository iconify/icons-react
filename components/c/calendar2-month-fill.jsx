import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w55red2zg.css';
import '../../css/z/zsard4btn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w55red2zg"/><path class="zsard4btn"/></g>`,
		"fallback": "bi:calendar2-month-fill",
	});
}

export default Component;
