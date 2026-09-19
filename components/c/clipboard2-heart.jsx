import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/py_3t3bpr.css';
import '../../css/e/engdqdvya.css';
import '../../css/b/bwf1di5xo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="py_3t3bpr"/><path class="engdqdvya"/><path class="bwf1di5xo"/></g>`,
		"fallback": "bi:clipboard2-heart",
	});
}

export default Component;
