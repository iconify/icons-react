import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v786gsbxh.css';
import '../../css/p/pk5y7ozlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v786gsbxh"/><path class="pk5y7ozlt wm-a"/></g>`,
		"fallback": "withicons:avatar-older-woman-solid",
	});
}

export default Component;
