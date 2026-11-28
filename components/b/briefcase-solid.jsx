import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0kdh2che.css';
import '../../css/w/wyrj5sbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0kdh2che"/><path class="wyrj5sbqe"/></g>`,
		"fallback": "iconaut:briefcase-solid",
	});
}

export default Component;
