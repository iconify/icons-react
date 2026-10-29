import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d5wnl3arm.css';
import '../../css/c/cse-y8qnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d5wnl3arm"/><path class="cse-y8qnc wm-a"/></g>`,
		"fallback": "withicons:avatar-robot-solid",
	});
}

export default Component;
