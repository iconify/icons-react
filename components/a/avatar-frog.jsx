import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uo2zv8b4x.css';
import '../../css/l/lc8hcibtz.css';
import '../../css/p/pg6ewjkha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uo2zv8b4x"/><path class="lc8hcibtz"/><path class="pg6ewjkha"/></g>`,
		"fallback": "withicons-bauhaus:avatar-frog",
	});
}

export default Component;
