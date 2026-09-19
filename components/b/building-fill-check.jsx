import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttn-y1bkn.css';
import '../../css/e/e3q5gacib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ttn-y1bkn"/><path class="e3q5gacib"/></g>`,
		"fallback": "bi:building-fill-check",
	});
}

export default Component;
