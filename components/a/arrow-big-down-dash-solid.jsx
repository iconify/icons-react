import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzn26-b5u.css';
import '../../css/t/t7laofbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzn26-b5u"/><path class="t7laofbfa"/></g>`,
		"fallback": "iconaut:arrow-big-down-dash-solid",
	});
}

export default Component;
