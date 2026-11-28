import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvl8cjbsz.css';
import '../../css/j/j7srptb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hvl8cjbsz secondary"/><path class="j7srptb-p primary"/></g>`,
		"fallback": "iconaut:bluetooth-searching-duotone",
	});
}

export default Component;
