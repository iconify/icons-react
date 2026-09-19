import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ryhj5nbiq.css';
import '../../css/k/k0vwi4beb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ryhj5nbiq"/><path class="k0vwi4beb"/></g>`,
		"fallback": "glyphs:file-remove-1-bold",
	});
}

export default Component;
