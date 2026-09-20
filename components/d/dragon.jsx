import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5emv0box.css';
import '../../css/d/d4g-9tsgn.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/de-mnhbxx.css';
import '../../css/i/i79r_h0sv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5emv0box"/><path class="d4g-9tsgn"/><g class="ij2x_72vy"><path class="de-mnhbxx"/><path class="i79r_h0sv"/></g>`,
		"fallback": "openmoji:dragon",
	});
}

export default Component;
