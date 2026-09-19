import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g53wcg3qh.css';
import '../../css/u/uvc3jdbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g53wcg3qh"/><path clip-rule="evenodd" class="uvc3jdbwi"/></g>`,
		"fallback": "healthicons:female-sex-worker",
	});
}

export default Component;
