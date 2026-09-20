import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mevpcjxyu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wqstwcb6o.css';
import '../../css/l/lkb91jb1n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mevpcjxyu"/><g class="ij2x_72vy"><path class="wqstwcb6o"/><path class="lkb91jb1n"/></g>`,
		"fallback": "openmoji:check-box-with-check",
	});
}

export default Component;
