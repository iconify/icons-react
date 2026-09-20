import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e60iy_mro.css';
import '../../css/s/sh99uv4nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e60iy_mro"/><path class="sh99uv4nx"/></g>`,
		"fallback": "reicon:angles-right2-filled",
	});
}

export default Component;
