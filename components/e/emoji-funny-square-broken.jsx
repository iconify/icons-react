import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m-_j7-iyd.css';
import '../../css/d/dl9l1deqp.css';
import '../../css/z/zvbb8ccix.css';
import '../../css/t/tdhloyasy.css';
import '../../css/l/l5tkhob0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="m-_j7-iyd"/><path class="dl9l1deqp"/><path class="zvbb8ccix"/><path class="tdhloyasy"/><ellipse transform="rotate(-15 8.714 11.328)" class="l5tkhob0v"/></g>`,
		"fallback": "solar:emoji-funny-square-broken",
	});
}

export default Component;
