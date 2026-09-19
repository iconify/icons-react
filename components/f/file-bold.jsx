import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_vbvlbcl.css';
import '../../css/k/k0vwi4beb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y_vbvlbcl"/><path class="k0vwi4beb"/></g>`,
		"fallback": "glyphs:file-bold",
	});
}

export default Component;
