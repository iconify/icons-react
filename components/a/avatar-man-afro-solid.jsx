import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1ta49bck.css';
import '../../css/o/oovi30btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k1ta49bck"/><path class="oovi30btw wm-a"/></g>`,
		"fallback": "withicons:avatar-man-afro-solid",
	});
}

export default Component;
