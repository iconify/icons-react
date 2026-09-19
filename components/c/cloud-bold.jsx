import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw4uyccrb.css';
import '../../css/m/m2ow1_b2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aw4uyccrb"/><path class="m2ow1_b2u"/></g>`,
		"fallback": "glyphs:cloud-bold",
	});
}

export default Component;
