import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5qc26bwj.css';
import '../../css/o/o119lezwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w5qc26bwj"/><path class="o119lezwu primary"/></g>`,
		"fallback": "iconaut:euro-duotone",
	});
}

export default Component;
