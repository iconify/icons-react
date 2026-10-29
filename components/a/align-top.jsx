import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wj05nbxlz.css';
import '../../css/g/g4o146b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wj05nbxlz"/><path class="g4o146b6z wm-a"/></g>`,
		"fallback": "withicons:align-top",
	});
}

export default Component;
