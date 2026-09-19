import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elk25cc6y.css';
import '../../css/m/morcw3b2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="elk25cc6y"/><path class="morcw3b2l"/></g>`,
		"fallback": "at-icons:coins",
	});
}

export default Component;
