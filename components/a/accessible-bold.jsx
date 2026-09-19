import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4sqr_b8a.css';
import '../../css/o/orfnzu4wu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r4sqr_b8a"/><path class="orfnzu4wu"/></g>`,
		"fallback": "glyphs:accessible-bold",
	});
}

export default Component;
