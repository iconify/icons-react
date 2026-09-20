import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhwts9rpz.css';
import '../../css/c/cp73uky_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jhwts9rpz"/><path clip-rule="evenodd" class="cp73uky_t"/></g>`,
		"fallback": "majesticons:analytics-plus",
	});
}

export default Component;
