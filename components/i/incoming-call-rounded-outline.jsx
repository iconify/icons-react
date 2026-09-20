import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxed9vmie.css';
import '../../css/v/v1v-h8lto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dxed9vmie"/><path class="v1v-h8lto"/></g>`,
		"fallback": "solar:incoming-call-rounded-outline",
	});
}

export default Component;
