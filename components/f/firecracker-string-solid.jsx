import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ct__q2bcw.css';
import '../../css/s/s1retmb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ct__q2bcw"/><path class="s1retmb8d wm-s"/></g>`,
		"fallback": "withicons:firecracker-string-solid",
	});
}

export default Component;
