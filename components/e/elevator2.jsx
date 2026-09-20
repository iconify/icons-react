import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktke6pbuf.css';
import '../../css/f/f6-j05egx.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/ll7ao0dns.css';
import '../../css/z/z8s9h6btf.css';
import '../../css/u/uqsib7m9f.css';
import '../../css/q/q_fr0cb_u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktke6pbuf"/><path class="f6-j05egx"/><g class="ij2x_72vy"><path class="ll7ao0dns"/><path class="z8s9h6btf"/><path class="uqsib7m9f"/><path class="q_fr0cb_u"/></g>`,
		"fallback": "openmoji:elevator2",
	});
}

export default Component;
