import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mh_ia-4dv.css';
import '../../css/n/n2ngjlb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mh_ia-4dv"/><path class="n2ngjlb_o"/></g>`,
		"fallback": "coolicons:eraser-sparkle-bulk-round",
	});
}

export default Component;
