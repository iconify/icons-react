import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-17ywbwk.css';
import '../../css/n/nrl1svbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y-17ywbwk"/><path class="nrl1svbkp wm-a"/></g>`,
		"fallback": "withicons:avatar-unicorn-solid",
	});
}

export default Component;
