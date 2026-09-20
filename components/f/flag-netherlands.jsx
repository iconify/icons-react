import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/r/r73utib8z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="e_6_n4b0n"/><path class="r73utib8z"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-netherlands",
	});
}

export default Component;
