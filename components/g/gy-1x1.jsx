import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ga715lb3o.css';
import '../../css/q/qpz28dydz.css';
import '../../css/z/zjbhag62p.css';
import '../../css/b/bjklcmb8a.css';
import '../../css/s/sesalrv-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ga715lb3o"/><path class="qpz28dydz"/><path class="zjbhag62p"/><path class="bjklcmb8a"/><path class="sesalrv-s"/></g>`,
		"fallback": "flag:gy-1x1",
	});
}

export default Component;
