import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6cq92bhc.css';
import '../../css/b/b8z-j1btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6cq92bhc"/><path class="b8z-j1btd"/></g>`,
		"fallback": "reicon:body-shape-duotone",
	});
}

export default Component;
