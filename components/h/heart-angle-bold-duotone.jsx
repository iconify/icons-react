import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0b5eq-1b.css';
import '../../css/o/oapdgmb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h0b5eq-1b"/><path class="oapdgmb7n"/></g>`,
		"fallback": "solar:heart-angle-bold-duotone",
	});
}

export default Component;
