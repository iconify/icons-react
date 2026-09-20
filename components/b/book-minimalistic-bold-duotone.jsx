import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l64754odp.css';
import '../../css/f/fidd3xbvx.css';
import '../../css/d/dyu0cp5on.css';
import '../../css/u/ub6dtb6xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l64754odp"/><path class="fidd3xbvx"/><path class="dyu0cp5on"/><path class="ub6dtb6xc"/></g>`,
		"fallback": "solar:book-minimalistic-bold-duotone",
	});
}

export default Component;
