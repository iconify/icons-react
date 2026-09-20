import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/msd8vebqr.css';
import '../../css/p/ph246-dee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="msd8vebqr"/><path class="ph246-dee"/></g>`,
		"fallback": "streamline-freehand:e-commerce-target-shopping-bag",
	});
}

export default Component;
