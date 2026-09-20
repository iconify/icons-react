import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mx2jxjw2b.css';
import '../../css/r/rk0p0wb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mx2jxjw2b"/><path clip-rule="evenodd" class="rk0p0wb_c"/></g>`,
		"fallback": "reicon:heart-unlock",
	});
}

export default Component;
