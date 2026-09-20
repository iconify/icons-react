import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqq9tgbgg.css';
import '../../css/e/e5h6ycpxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tqq9tgbgg"/><path clip-rule="evenodd" class="e5h6ycpxd"/></g>`,
		"fallback": "solar:call-medicine-bold",
	});
}

export default Component;
