import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6gshrb2b.css';
import '../../css/j/jz0djcb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6gshrb2b secondary"/><path class="jz0djcb4b primary"/></g>`,
		"fallback": "iconaut:arrow-u-turn-up-line-flip-duotone",
	});
}

export default Component;
