import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqhdsrbpo.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b2tl1fbgr.css';
import '../../css/o/oi3x71bay.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqhdsrbpo"/><g class="ij2x_72vy"><path class="b2tl1fbgr"/><path class="oi3x71bay"/></g>`,
		"fallback": "openmoji:archive",
	});
}

export default Component;
