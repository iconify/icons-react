import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ouy_5630q.css';
import '../../css/d/dx7k_3bea.css';
import '../../css/u/uxv7f4b_y.css';
import '../../css/y/y6pe4bckh.css';
import '../../css/c/cmpkjnb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ouy_5630q"/><path class="dx7k_3bea wm-a"/><path class="uxv7f4b_y"/><path class="y6pe4bckh"/><path class="cmpkjnb0y"/></g>`,
		"fallback": "withicons:atom-duo",
	});
}

export default Component;
