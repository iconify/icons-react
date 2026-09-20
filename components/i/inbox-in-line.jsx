import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlqn3sbaw.css';
import '../../css/j/j_i0h4b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlqn3sbaw"/><path class="j_i0h4b1v"/></g>`,
		"fallback": "majesticons:inbox-in-line",
	});
}

export default Component;
