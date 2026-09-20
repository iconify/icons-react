import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_gvibbaj.css';
import '../../css/y/y1ve8lmop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_gvibbaj"/><path clip-rule="evenodd" class="y1ve8lmop"/></g>`,
		"fallback": "reicon:cycling2-filled",
	});
}

export default Component;
