import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7s9u4b3i.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/g0si_9w_c.css';
import '../../css/q/qyp590b_w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e7s9u4b3i"/><g class="jn8qy4bru"><path class="g0si_9w_c"/><path class="qyp590b_w"/></g>`,
		"fallback": "openmoji:head-shaking-vertically",
	});
}

export default Component;
