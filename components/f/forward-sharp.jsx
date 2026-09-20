import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj03t2b4p.css';
import '../../css/t/t0k3i72_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aj03t2b4p"/><path class="t0k3i72_h"/></g>`,
		"fallback": "pixelarticons:forward-sharp",
	});
}

export default Component;
