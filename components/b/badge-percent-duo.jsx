import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7r4msbaz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/l/l5j_-zs8c.css';
import '../../css/y/y78mtrb0d.css';
import '../../css/l/lb_vcvwoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7r4msbaz secondary"/><g class="dt0cm9dhy primary"><path class="l4--ovbba"/><path class="l5j_-zs8c"/><path class="y78mtrb0d"/><path class="lb_vcvwoy"/></g>`,
		"fallback": "iconaut:badge-percent-duo",
	});
}

export default Component;
