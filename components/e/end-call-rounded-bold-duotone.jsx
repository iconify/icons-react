import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vs070p6lt.css';
import '../../css/j/jmb_061ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vs070p6lt"/><path class="jmb_061ej"/></g>`,
		"fallback": "solar:end-call-rounded-bold-duotone",
	});
}

export default Component;
