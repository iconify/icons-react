import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmeqhlbdy.css';
import '../../css/n/np4o4qk3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmeqhlbdy secondary"/><path class="np4o4qk3b primary"/></g>`,
		"fallback": "iconaut:gpu-duotone",
	});
}

export default Component;
