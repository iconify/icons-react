import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fy2k8uysb.css';
import '../../css/j/j7he7sbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fy2k8uysb wm-k"/><path class="j7he7sbzb wm-s"/></g>`,
		"fallback": "withicons:clipboard-pen-gloss",
	});
}

export default Component;
