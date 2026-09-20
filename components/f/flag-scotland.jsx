import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/j/jb61_ub9o.css';
import '../../css/a/a40un3b-w.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="jb61_ub9o"/><path class="a40un3b-w"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-scotland",
	});
}

export default Component;
