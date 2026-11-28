import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0nez9b5x.css';
import '../../css/k/k4tei8bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h0nez9b5x"/><path class="k4tei8bid"/></g>`,
		"fallback": "iconaut:escalator",
	});
}

export default Component;
