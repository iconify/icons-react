import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ctcmcab3c.css';
import '../../css/f/fq7k5rbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ctcmcab3c"/><path class="fq7k5rbgc"/></g>`,
		"fallback": "iconaut:arrow-up-right-duo",
	});
}

export default Component;
