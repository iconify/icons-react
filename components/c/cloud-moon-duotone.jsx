import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h89aebh-r.css';
import '../../css/n/nl54mzb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h89aebh-r secondary"/><path class="nl54mzb6b primary"/></g>`,
		"fallback": "iconaut:cloud-moon-duotone",
	});
}

export default Component;
