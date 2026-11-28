import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqhz8nj0h.css';
import '../../css/u/u58f46b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqhz8nj0h"/><path class="u58f46b3w"/></g>`,
		"fallback": "iconaut:battery-low-solid",
	});
}

export default Component;
