import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1gbkpbvz.css';
import '../../css/f/fwodkrsbs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u1gbkpbvz"/><path class="fwodkrsbs"/></g>`,
		"fallback": "glyphs:cogwheel-bold",
	});
}

export default Component;
