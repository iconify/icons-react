import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qa1necywe.css';
import '../../css/j/j796cnbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qa1necywe"/><path class="j796cnbql"/></g>`,
		"fallback": "iconamoon:credit-card-duotone",
	});
}

export default Component;
