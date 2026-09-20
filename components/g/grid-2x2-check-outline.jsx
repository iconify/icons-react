import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7nevwb2h.css';
import '../../css/e/etos68b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i7nevwb2h"/><path class="etos68b3d"/></g>`,
		"fallback": "solar:grid-2x2-check-outline",
	});
}

export default Component;
