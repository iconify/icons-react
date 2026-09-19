import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jayab4bkc.css';
import '../../css/l/looxvfs3b.css';
import '../../css/l/loy_czb3p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jayab4bkc"/><path class="looxvfs3b"/><path class="loy_czb3p"/></g>`,
		"fallback": "glyphs:heart-half-2-bold",
	});
}

export default Component;
