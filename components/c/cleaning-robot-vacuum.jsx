import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j188ntmqq.css';
import '../../css/x/xczjhabcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j188ntmqq"/><path class="xczjhabcq"/></g>`,
		"fallback": "streamline-freehand:cleaning-robot-vacuum",
	});
}

export default Component;
