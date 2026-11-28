import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/k/kbe5qkb7r.css';
import '../../css/n/nt5pg-5jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="kbe5qkb7r"/><path class="nt5pg-5jr"/></g>`,
		"fallback": "iconaut:circle-divide",
	});
}

export default Component;
