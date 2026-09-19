import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxsbg2x6k.css';
import '../../css/c/cobwtfbfx.css';
import '../../css/k/k-6yl9e2n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="nxsbg2x6k"/><path clip-rule="evenodd" class="cobwtfbfx"/><path class="k-6yl9e2n"/></g>`,
		"fallback": "glyphs:camcorder-bold",
	});
}

export default Component;
