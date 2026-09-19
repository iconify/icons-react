import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2wwpnb4g.css';
import '../../css/s/s2cicwbnt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u2wwpnb4g"/><path clip-rule="evenodd" class="s2cicwbnt"/></g>`,
		"fallback": "glyphs:disc-bold",
	});
}

export default Component;
