import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/psojypbns.css';
import '../../css/w/wgm9k5bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="psojypbns"/><path class="wgm9k5bro wm-s"/></g>`,
		"fallback": "withicons:holi-splash-solid",
	});
}

export default Component;
