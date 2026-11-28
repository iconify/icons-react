import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dab5zv50c.css';
import '../../css/f/faoxouv6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dab5zv50c"/><path class="faoxouv6f"/></g>`,
		"fallback": "iconaut:dollar-sign-duo",
	});
}

export default Component;
