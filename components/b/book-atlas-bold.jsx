import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gv1rnmbhg.css';
import '../../css/l/l2q3qg5ur.css';
import '../../css/j/j5ytutb_b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gv1rnmbhg"/><path clip-rule="evenodd" class="l2q3qg5ur"/><path clip-rule="evenodd" class="j5ytutb_b"/></g>`,
		"fallback": "glyphs:book-atlas-bold",
	});
}

export default Component;
