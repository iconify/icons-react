import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgfsgobcj.css';
import '../../css/p/p_l38sani.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jgfsgobcj"/><path class="p_l38sani"/></g>`,
		"fallback": "healthicons:hospice-outline-24px",
	});
}

export default Component;
