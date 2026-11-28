import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjl2x3boh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/p/p2z-q2bky.css';
import '../../css/q/qu31vhabl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wjl2x3boh"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="p2z-q2bky"/><path class="qu31vhabl"/></g>`,
		"fallback": "iconaut:circle-search-duo",
	});
}

export default Component;
