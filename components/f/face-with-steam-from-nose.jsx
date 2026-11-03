import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7hlmrp-q.css';
import '../../css/c/cqxljhbfa.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/exzaj7nbx.css';
import '../../css/k/khwlr1_iy.css';
import '../../css/p/pp-gwnbrk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7hlmrp-q"/><path class="cqxljhbfa"/><g class="jn8qy4bru"><path class="exzaj7nbx"/><path class="khwlr1_iy"/><path class="pp-gwnbrk"/></g>`,
		"fallback": "openmoji:face-with-steam-from-nose",
	});
}

export default Component;
