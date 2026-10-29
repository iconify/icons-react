import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xwaqrbcwq.css';
import '../../css/w/wxy7ygbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xwaqrbcwq"/><path class="wm-s wxy7ygbww"/></g>`,
		"fallback": "withicons:cloud-check-solid",
	});
}

export default Component;
