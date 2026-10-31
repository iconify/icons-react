import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/c/c29k6cp1o.css';
import '../../css/z/zkknb_but.css';
import '../../css/c/c4-gllbmj.css';
import '../../css/r/rze47ib2l.css';
import '../../css/t/twi4qybfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="c29k6cp1o"/><path class="zkknb_but"/><path class="c4-gllbmj"/><path class="rze47ib2l"/><path class="twi4qybfz"/></g>`,
		"fallback": "withicons-retro:circle-pause",
	});
}

export default Component;
