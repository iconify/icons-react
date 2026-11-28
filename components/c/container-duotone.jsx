import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oa5byvy8y.css';
import '../../css/j/jmr8vebhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oa5byvy8y secondary"/><path class="jmr8vebhr primary"/></g>`,
		"fallback": "iconaut:container-duotone",
	});
}

export default Component;
