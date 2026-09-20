import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd86l4b1p.css';
import '../../css/d/davv75zdr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x9_905d5w.css';
import '../../css/i/ifhbvbwfe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd86l4b1p"/><path class="davv75zdr"/><g class="jn8qy4bru"><path class="x9_905d5w"/><path class="ifhbvbwfe"/></g>`,
		"fallback": "openmoji:bone",
	});
}

export default Component;
