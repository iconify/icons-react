import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6vxvox9y.css';
import '../../css/v/v39awjb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6vxvox9y"/><path class="v39awjb4b"/></g>`,
		"fallback": "reicon:filters-filled",
	});
}

export default Component;
