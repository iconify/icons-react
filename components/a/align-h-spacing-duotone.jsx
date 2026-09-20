import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ax3syxi2d.css';
import '../../css/c/c88i8z_na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ax3syxi2d"/><path class="c88i8z_na"/></g>`,
		"fallback": "reicon:align-h-spacing-duotone",
	});
}

export default Component;
