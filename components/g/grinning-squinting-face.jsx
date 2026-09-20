import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/x/xtagy0bqr.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/m1xm7gbsr.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/j/jdngjseyp.css';
import '../../css/s/so602gbia.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="xtagy0bqr"/><path class="q0r50o_-q"/><g class="jn8qy4bru"><path class="m1xm7gbsr"/><circle class="qmnpc1bre"/><path class="jdngjseyp"/><path class="so602gbia"/></g>`,
		"fallback": "openmoji:grinning-squinting-face",
	});
}

export default Component;
