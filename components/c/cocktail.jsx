import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8f9nkjjf.css';
import '../../css/p/p86a-ebep.css';
import '../../css/c/cuuwd-bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8f9nkjjf"/><path class="p86a-ebep"/><path class="cuuwd-bug"/></g>`,
		"fallback": "andrsrxn:cocktail",
	});
}

export default Component;
