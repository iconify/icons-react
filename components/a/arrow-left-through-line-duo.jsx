import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z_bj82b9f.css';
import '../../css/v/vjepk8-ck.css';
import '../../css/z/zxbe8_bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z_bj82b9f"/><path class="vjepk8-ck"/><path class="zxbe8_bso"/></g>`,
		"fallback": "iconaut:arrow-left-through-line-duo",
	});
}

export default Component;
