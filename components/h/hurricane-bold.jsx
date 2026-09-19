import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejapvqb_p.css';
import '../../css/l/l2a6ydqet.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ejapvqb_p"/><path class="l2a6ydqet"/></g>`,
		"fallback": "glyphs:hurricane-bold",
	});
}

export default Component;
