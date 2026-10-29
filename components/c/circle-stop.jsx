import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/c/c-a4_nb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="c-a4_nb-a wm-a"/></g>`,
		"fallback": "withicons:circle-stop",
	});
}

export default Component;
