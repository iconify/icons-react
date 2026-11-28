import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ec1w9g4se.css';
import '../../css/p/p2to_866o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ec1w9g4se"/><path class="p2to_866o"/></g>`,
		"fallback": "iconaut:corner-left-down",
	});
}

export default Component;
