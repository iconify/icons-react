import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewqrcbcqe.css';
import '../../css/t/tncp8gb8o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ewqrcbcqe"/><path clip-rule="evenodd" class="tncp8gb8o"/></g>`,
		"fallback": "glyphs:grin-tongue-squint-bold",
	});
}

export default Component;
