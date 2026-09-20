import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9ruxmb0b.css';
import '../../css/s/s0b_eed4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9ruxmb0b"/><path class="s0b_eed4n"/></g>`,
		"fallback": "solar:hearts-bold-duotone",
	});
}

export default Component;
