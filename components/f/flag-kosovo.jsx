import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/g/g96v0obfk.css';
import '../../css/b/bjewo8blr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="g96v0obfk"/><path class="bjewo8blr"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-kosovo",
	});
}

export default Component;
