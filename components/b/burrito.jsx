import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4jbx15ww.css';
import '../../css/y/yj5_e8b5l.css';
import '../../css/t/t4zjezbtg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bfuou51dl.css';
import '../../css/s/slcpbtblk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4jbx15ww"/><path class="yj5_e8b5l"/><path class="t4zjezbtg"/><g class="ij2x_72vy"><path class="bfuou51dl"/><path class="slcpbtblk"/></g>`,
		"fallback": "openmoji:burrito",
	});
}

export default Component;
