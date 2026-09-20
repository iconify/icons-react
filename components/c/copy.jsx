import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxxriwbma.css';
import '../../css/r/r7u9g503m.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/qh9dwkb_c.css';
import '../../css/h/h0rce4biq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxxriwbma"/><path class="r7u9g503m"/><g class="ij2x_72vy"><path class="qh9dwkb_c"/><path class="h0rce4biq"/></g>`,
		"fallback": "openmoji:copy",
	});
}

export default Component;
