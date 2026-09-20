import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jytcq98on.css';
import '../../css/j/jvurxhwcp.css';
import '../../css/q/qm86erzny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jytcq98on"/><path class="jvurxhwcp"/><path class="qm86erzny"/></g>`,
		"fallback": "solar:fridge-bold-duotone",
	});
}

export default Component;
