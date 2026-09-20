import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/b/bj6h_rfee.css';
import '../../css/j/j6j3_zbyi.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><circle class="bj6h_rfee"/><path class="j6j3_zbyi"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-laos",
	});
}

export default Component;
