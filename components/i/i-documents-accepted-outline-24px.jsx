import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2yfbrnjl.css';
import '../../css/s/s44rk8z4u.css';
import '../../css/e/e8odqpb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s2yfbrnjl"/><path clip-rule="evenodd" class="s44rk8z4u"/><path class="e8odqpb8b"/></g>`,
		"fallback": "healthicons:i-documents-accepted-outline-24px",
	});
}

export default Component;
