import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/neowfsbnb.css';
import '../../css/l/ly8j9xbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="neowfsbnb secondary"/><path class="ly8j9xbeq primary"/></g>`,
		"fallback": "iconaut:cheese-duotone",
	});
}

export default Component;
