import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm57k6b9r.css';
import '../../css/v/vekvmulpq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gm57k6b9r"/><path class="vekvmulpq"/></g>`,
		"fallback": "pullo:bow-and-arrow-duotone",
	});
}

export default Component;
