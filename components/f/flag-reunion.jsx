import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/j/j6_bsfbzm.css';
import '../../css/k/kudkjjerd.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="j6_bsfbzm"/><path class="kudkjjerd"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-reunion",
	});
}

export default Component;
