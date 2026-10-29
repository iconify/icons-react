import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nacih0a4v.css';
import '../../css/s/ssef39bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nacih0a4v"/><path class="ssef39bkx wm-s"/></g>`,
		"fallback": "withicons:avatar-monster-solid",
	});
}

export default Component;
