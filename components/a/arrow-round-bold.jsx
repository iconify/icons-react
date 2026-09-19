import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zc-5x3b5n.css';
import '../../css/g/gdcjfnbpy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zc-5x3b5n"/><path class="gdcjfnbpy"/></g>`,
		"fallback": "glyphs:arrow-round-bold",
	});
}

export default Component;
