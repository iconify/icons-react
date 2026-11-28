import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h--bp7beo.css';
import '../../css/g/gavv6ubwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h--bp7beo secondary"/><path class="gavv6ubwr primary"/></g>`,
		"fallback": "iconaut:gift-duotone",
	});
}

export default Component;
