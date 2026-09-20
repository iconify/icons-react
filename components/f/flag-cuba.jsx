import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/p/p5fi1fb0b.css';
import '../../css/m/m0im8qt8x.css';
import '../../css/c/c_swlixli.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="p5fi1fb0b"/><path class="m0im8qt8x"/><path class="c_swlixli"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-cuba",
	});
}

export default Component;
