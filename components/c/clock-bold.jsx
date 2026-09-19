import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us95srb8d.css';
import '../../css/n/nlxnq8bbi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="us95srb8d"/><path clip-rule="evenodd" class="nlxnq8bbi"/></g>`,
		"fallback": "glyphs:clock-bold",
	});
}

export default Component;
