import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrf--cblg.css';
import '../../css/m/mzwvp5ncc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f2p50r4es.css';
import '../../css/a/aq5dl2b5q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrf--cblg"/><path class="mzwvp5ncc"/><g class="jn8qy4bru"><path class="f2p50r4es"/><path class="aq5dl2b5q"/></g>`,
		"fallback": "openmoji:feather",
	});
}

export default Component;
