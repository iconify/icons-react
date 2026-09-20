import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcci-9b_b.css';
import '../../css/o/ow6v38err.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcci-9b_b"/><path clip-rule="evenodd" class="ow6v38err"/></g>`,
		"fallback": "reicon:calendar-minus",
	});
}

export default Component;
