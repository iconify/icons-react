import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/py_3t3bpr.css';
import '../../css/r/rslf0ccxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="py_3t3bpr"/><path class="rslf0ccxc"/></g>`,
		"fallback": "bi:clipboard2-heart-fill",
	});
}

export default Component;
