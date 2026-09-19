import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ig2wf3byv.css';
import '../../css/c/c5tifvghb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ig2wf3byv"/><path class="c5tifvghb"/></g>`,
		"fallback": "glyphs:comment-bold",
	});
}

export default Component;
