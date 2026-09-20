import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnbzi3bgc.css';
import '../../css/w/w8wq6rb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bnbzi3bgc"/><path class="w8wq6rb0e"/></g>`,
		"fallback": "reicon:box-add-filled",
	});
}

export default Component;
