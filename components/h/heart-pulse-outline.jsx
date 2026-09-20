import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dakc9mbtf.css';
import '../../css/e/es8o8lbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dakc9mbtf"/><path clip-rule="evenodd" class="es8o8lbej"/></g>`,
		"fallback": "solar:heart-pulse-outline",
	});
}

export default Component;
