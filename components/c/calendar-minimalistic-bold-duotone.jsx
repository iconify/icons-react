import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q5iyufv1u.css';
import '../../css/u/ujjowgx-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q5iyufv1u"/><path class="ujjowgx-j"/></g>`,
		"fallback": "solar:calendar-minimalistic-bold-duotone",
	});
}

export default Component;
