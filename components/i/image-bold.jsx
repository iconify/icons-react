import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmanxnaqh.css';
import '../../css/h/h8v7_hsyz.css';
import '../../css/t/tktzuhbfv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmanxnaqh"/><path clip-rule="evenodd" class="h8v7_hsyz"/><path class="tktzuhbfv"/></g>`,
		"fallback": "glyphs:image-bold",
	});
}

export default Component;
