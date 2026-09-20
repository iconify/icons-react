import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fm3s1pbab.css';
import '../../css/r/rqpzphbav.css';
import '../../css/a/a4hlfkb_j.css';
import '../../css/x/xvfitnbho.css';
import '../../css/u/uglckyvxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fm3s1pbab"/><path clip-rule="evenodd" class="rqpzphbav"/><path class="a4hlfkb_j"/><path class="xvfitnbho"/><path clip-rule="evenodd" class="uglckyvxh"/></g>`,
		"fallback": "reicon:earbuds-left-duotone",
	});
}

export default Component;
