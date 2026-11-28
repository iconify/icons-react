import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u5wquhy7h.css';
import '../../css/q/q0jqonbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u5wquhy7h"/><path class="primary q0jqonbuz"/></g>`,
		"fallback": "iconaut:history-x-duotone",
	});
}

export default Component;
