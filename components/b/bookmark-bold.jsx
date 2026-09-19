import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9bq6ybwr.css';
import '../../css/z/z_qdpcbnx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l9bq6ybwr"/><path class="z_qdpcbnx"/></g>`,
		"fallback": "glyphs:bookmark-bold",
	});
}

export default Component;
