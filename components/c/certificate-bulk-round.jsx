import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rt3hilb3d.css';
import '../../css/g/gc793p83l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rt3hilb3d"/><path class="gc793p83l"/></g>`,
		"fallback": "coolicons:certificate-bulk-round",
	});
}

export default Component;
