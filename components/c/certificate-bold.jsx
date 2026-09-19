import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kt742qbts.css';
import '../../css/c/cbaei4t6p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kt742qbts"/><path class="cbaei4t6p"/></g>`,
		"fallback": "glyphs:certificate-bold",
	});
}

export default Component;
