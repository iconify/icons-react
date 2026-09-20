import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozms9_odv.css';
import '../../css/p/psjj64bet.css';
import '../../css/i/ioes2239h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dwhnc0bkd.css';
import '../../css/c/cuz6-yb6p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozms9_odv"/><path class="psjj64bet"/><path class="ioes2239h"/><g class="ij2x_72vy"><path class="dwhnc0bkd"/><path class="cuz6-yb6p"/></g>`,
		"fallback": "openmoji:computer-mouse2",
	});
}

export default Component;
