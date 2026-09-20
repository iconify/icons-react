import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oekj01bqy.css';
import '../../css/h/hew9z-mxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oekj01bqy"/><path class="hew9z-mxe"/></g>`,
		"fallback": "solar:dialog-2-bold-duotone",
	});
}

export default Component;
