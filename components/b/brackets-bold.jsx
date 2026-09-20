import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sggg2-9-b.css';
import '../../css/p/pd97-hlyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sggg2-9-b"/><path class="pd97-hlyp"/></g>`,
		"fallback": "solar:brackets-bold",
	});
}

export default Component;
