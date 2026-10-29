import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ot7ug_ubs.css';
import '../../css/e/e_jnf7h6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ot7ug_ubs"/><path class="e_jnf7h6d wm-a"/></g>`,
		"fallback": "withicons:croissant",
	});
}

export default Component;
