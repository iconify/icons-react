import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kr4evflrk.css';
import '../../css/p/pddlj0b6t.css';
import '../../css/j/joig5dakl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kr4evflrk"/><path class="pddlj0b6t"/><path class="joig5dakl"/></g>`,
		"fallback": "solar:dialog-linear",
	});
}

export default Component;
