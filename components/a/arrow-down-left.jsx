import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8pkohj3o.css';
import '../../css/t/te0b9nl2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p8pkohj3o"/><path class="te0b9nl2o"/></g>`,
		"fallback": "iconaut:arrow-down-left",
	});
}

export default Component;
