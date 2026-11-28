import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzpoxesfd.css';
import '../../css/r/r-961pbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uzpoxesfd"/><path class="primary r-961pbej"/></g>`,
		"fallback": "iconaut:credit-card-duotone",
	});
}

export default Component;
