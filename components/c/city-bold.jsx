import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qqu1dohcu.css';
import '../../css/w/w4876ob7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qqu1dohcu"/><path clip-rule="evenodd" class="w4876ob7n"/></g>`,
		"fallback": "solar:city-bold",
	});
}

export default Component;
