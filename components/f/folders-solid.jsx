import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2byvtbew.css';
import '../../css/n/nm5z4yn8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d2byvtbew"/><path class="nm5z4yn8d"/></g>`,
		"fallback": "iconaut:folders-solid",
	});
}

export default Component;
