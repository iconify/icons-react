import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxy1xwb1c.css';
import '../../css/p/p6wlddcnr.css';
import '../../css/d/dplnbtbni.css';
import '../../css/j/jrzue2bce.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxy1xwb1c"/><path class="p6wlddcnr"/><path class="dplnbtbni"/><path class="jrzue2bce"/>`,
		"fallback": "energy-icons:bench-vice-20-bold",
	});
}

export default Component;
