import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g55q2wted.css';
import '../../css/c/ci49p95-q.css';
import '../../css/j/jfqqfvbay.css';
import '../../css/i/ip33w8bxx.css';
import '../../css/n/nwtst0_xk.css';
import '../../css/k/koxbu9f0v.css';
import '../../css/t/tq4kzgbyb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g55q2wted"/><path class="ci49p95-q"/><path class="jfqqfvbay"/><path class="ip33w8bxx"/><path class="nwtst0_xk"/><path class="koxbu9f0v"/><path class="tq4kzgbyb"/>`,
		"fallback": "thesvg-color:godot",
	});
}

export default Component;
