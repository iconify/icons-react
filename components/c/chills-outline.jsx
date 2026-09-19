import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f7zavu1tb.css';
import '../../css/a/ahrp9omsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f7zavu1tb"/><path class="ahrp9omsv"/></g>`,
		"fallback": "healthicons:chills-outline",
	});
}

export default Component;
