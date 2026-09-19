import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nvpd2l3gc.css';
import '../../css/k/k0vwi4beb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nvpd2l3gc"/><path class="k0vwi4beb"/></g>`,
		"fallback": "glyphs:file-remove-bold",
	});
}

export default Component;
