import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/la706ebvw.css';
import '../../css/q/qnb0a6bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="la706ebvw"/><path class="qnb0a6bwg wm-a"/></g>`,
		"fallback": "withicons:black-cat-solid",
	});
}

export default Component;
