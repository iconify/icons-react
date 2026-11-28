import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t1ydkablc.css';
import '../../css/r/r5r6k0bua.css';
import '../../css/p/pbgkwbc_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t1ydkablc"/><path class="r5r6k0bua"/><path class="pbgkwbc_y"/></g>`,
		"fallback": "iconaut:arrow-u-turn-up-line-flip-duo",
	});
}

export default Component;
