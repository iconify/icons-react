import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/u/u1--n3bbd.css';
import '../../css/e/ex5x2ve3t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="u1--n3bbd"/><path class="ex5x2ve3t"/>`,
		"fallback": "energy-icons:arrow-left-circle-20-bold",
	});
}

export default Component;
