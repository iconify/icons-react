import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lb5tddpfm.css';
import '../../css/f/f_1d46bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lb5tddpfm"/><path class="f_1d46bly"/></g>`,
		"fallback": "iconaut:arrow-big-left-dash",
	});
}

export default Component;
