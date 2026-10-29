import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/urb3kpbld.css';
import '../../css/i/idk2wtbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="urb3kpbld"/><path class="idk2wtbbi wm-a"/></g>`,
		"fallback": "withicons:droplets",
	});
}

export default Component;
