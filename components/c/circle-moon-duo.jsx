import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo01ujvaa.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/u/uv6bwxswk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo01ujvaa secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="uv6bwxswk"/></g>`,
		"fallback": "iconaut:circle-moon-duo",
	});
}

export default Component;
