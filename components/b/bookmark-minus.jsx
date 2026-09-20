import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pu7aop0zx.css';
import '../../css/q/q46z6fbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pu7aop0zx"/><path clip-rule="evenodd" class="q46z6fbps"/></g>`,
		"fallback": "reicon:bookmark-minus",
	});
}

export default Component;
