import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/z/zgt54ob8c.css';
import '../../css/s/s-7egrbyy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="jkq7-hbwz"/><path class="zgt54ob8c"/><path class="s-7egrbyy"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-argentina",
	});
}

export default Component;
