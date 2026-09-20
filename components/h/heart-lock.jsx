import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mx2jxjw2b.css';
import '../../css/g/gdmz_bc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mx2jxjw2b"/><path clip-rule="evenodd" class="gdmz_bc0s"/></g>`,
		"fallback": "reicon:heart-lock",
	});
}

export default Component;
