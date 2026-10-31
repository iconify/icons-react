import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w7saaorqp.css';
import '../../css/p/peysjjmve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w7saaorqp wm-k"/><path class="peysjjmve wm-a"/></g>`,
		"fallback": "withicons:avatar-robot-gloss",
	});
}

export default Component;
