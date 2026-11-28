import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adk6q0bih.css';
import '../../css/i/i9j06ojzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="adk6q0bih secondary"/><path class="i9j06ojzt primary"/></g>`,
		"fallback": "iconaut:dice-d20-duotone",
	});
}

export default Component;
