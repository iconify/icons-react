import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/y/ymh9xht4i.css';
import '../../css/s/s2luam95m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4--ovbba"/><path class="ymh9xht4i"/><path class="s2luam95m"/></g>`,
		"fallback": "iconaut:badge-korean-won",
	});
}

export default Component;
