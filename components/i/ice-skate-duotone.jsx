import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk01jtb4p.css';
import '../../css/r/r89n3q10g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nk01jtb4p secondary"/><path class="primary r89n3q10g"/></g>`,
		"fallback": "iconaut:ice-skate-duotone",
	});
}

export default Component;
