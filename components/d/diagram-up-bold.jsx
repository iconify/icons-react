import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hspmtbc_a.css';
import '../../css/p/p_g5-gbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hspmtbc_a"/><path class="p_g5-gbaa"/></g>`,
		"fallback": "solar:diagram-up-bold",
	});
}

export default Component;
