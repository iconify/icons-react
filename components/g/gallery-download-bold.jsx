import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esmr6uj6d.css';
import '../../css/n/n6mlowbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esmr6uj6d"/><path clip-rule="evenodd" class="n6mlowbjk"/></g>`,
		"fallback": "solar:gallery-download-bold",
	});
}

export default Component;
