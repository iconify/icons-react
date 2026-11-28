import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i20ueglbs.css';
import '../../css/f/fi44sfuxu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i20ueglbs"/><path class="fi44sfuxu"/></g>`,
		"fallback": "pullo:bell-dot-duotone",
	});
}

export default Component;
