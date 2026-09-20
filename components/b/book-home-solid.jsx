import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0ds4ackm.css';
import '../../css/i/ih78ahb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0ds4ackm"/><path class="ih78ahb6o"/></g>`,
		"fallback": "mynaui:book-home-solid",
	});
}

export default Component;
