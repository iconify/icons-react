import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np7ejac5q.css';
import '../../css/m/m819q-ngt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="np7ejac5q"/><path class="m819q-ngt"/></g>`,
		"fallback": "at-icons:heart-broken",
	});
}

export default Component;
