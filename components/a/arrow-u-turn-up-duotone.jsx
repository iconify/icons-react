import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esrivgk3x.css';
import '../../css/s/shwbfck_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esrivgk3x secondary"/><path class="primary shwbfck_l"/></g>`,
		"fallback": "iconaut:arrow-u-turn-up-duotone",
	});
}

export default Component;
