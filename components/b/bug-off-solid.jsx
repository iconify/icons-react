import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h-3bcdcss.css';
import '../../css/u/uhhh__bgh.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h-3bcdcss"/><path class="uhhh__bgh wm-a"/><path class="aalr8-b6s wm-s"/></g>`,
		"fallback": "withicons:bug-off-solid",
	});
}

export default Component;
