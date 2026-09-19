import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nd_lnebnh.css';
import '../../css/m/mz87cubvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nd_lnebnh"/><path clip-rule="evenodd" class="mz87cubvq"/></g>`,
		"fallback": "gg:calendar-two",
	});
}

export default Component;
