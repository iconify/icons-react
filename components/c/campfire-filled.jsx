import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6q9_ybaq.css';
import '../../css/n/nav75ifzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6q9_ybaq"/><path class="nav75ifzw"/></g>`,
		"fallback": "tabler:campfire-filled",
	});
}

export default Component;
