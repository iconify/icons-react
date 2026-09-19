import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vu42jzb4u.css';
import '../../css/y/y2dw53uue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vu42jzb4u"/><path clip-rule="evenodd" class="y2dw53uue"/></g>`,
		"fallback": "healthicons:endocrinology2x-outline",
	});
}

export default Component;
