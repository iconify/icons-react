import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqmyk1vxc.css';
import '../../css/o/od86rrrfe.css';
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
		"content": `<path class="mqmyk1vxc"/><path class="od86rrrfe"/><g class="ij2x_72vy"><path class="ty0jp0byr"/><path class="zyiv9wvjc"/></g>`,
		"fallback": "openmoji:ear-dark-skin-tone",
	});
}

export default Component;
