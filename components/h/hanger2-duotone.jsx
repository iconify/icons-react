import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rk8pkvb_e.css';
import '../../css/y/yj9nrrj4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rk8pkvb_e"/><path class="yj9nrrj4h"/></g>`,
		"fallback": "reicon:hanger2-duotone",
	});
}

export default Component;
