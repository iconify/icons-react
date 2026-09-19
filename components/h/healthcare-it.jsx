import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/idjs-f-cv.css';
import '../../css/m/maw6yo1va.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="idjs-f-cv"/><path class="maw6yo1va"/></g>`,
		"fallback": "healthicons:healthcare-it",
	});
}

export default Component;
