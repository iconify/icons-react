import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/me3qcxbaj.css';
import '../../css/t/t_wo4ibie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="me3qcxbaj"/><path class="t_wo4ibie wm-a"/></g>`,
		"fallback": "withicons:bookmark-plus",
	});
}

export default Component;
