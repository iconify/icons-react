import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/ss91at52n.css';
import '../../css/o/om6nlmbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ss91at52n"/><path class="om6nlmbny wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-horns-solid",
	});
}

export default Component;
