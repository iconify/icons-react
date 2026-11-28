import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4x9lyp9a.css';
import '../../css/x/x69mjac5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w4x9lyp9a"/><path class="primary x69mjac5k"/></g>`,
		"fallback": "iconaut:arrow-u-turn-left-line-flip-duotone",
	});
}

export default Component;
