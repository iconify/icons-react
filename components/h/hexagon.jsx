import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tf9_0-uqj.css';
import '../../css/h/h-upcp83y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tf9_0-uqj"/><path class="h-upcp83y wm-a"/></g>`,
		"fallback": "withicons:hexagon",
	});
}

export default Component;
