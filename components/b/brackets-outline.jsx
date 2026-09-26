import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/toz6dnrsx.css';
import '../../css/i/ixqfweb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="toz6dnrsx"/><path class="ixqfweb-e"/></g>`,
		"fallback": "solar:brackets-outline",
	});
}

export default Component;
