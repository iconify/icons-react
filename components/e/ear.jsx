import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfe_5bbnt.css';
import '../../css/p/pa2w7dcbl.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/ty0jp0byr.css';
import '../../css/z/zyiv9wvjc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfe_5bbnt"/><path class="pa2w7dcbl"/><g class="ij2x_72vy"><path class="ty0jp0byr"/><path class="zyiv9wvjc"/></g>`,
		"fallback": "openmoji:ear",
	});
}

export default Component;
