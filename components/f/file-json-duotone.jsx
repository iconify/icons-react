import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkm962byn.css';
import '../../css/y/y2w3r9pce.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bkm962byn"/><path class="y2w3r9pce"/></g>`,
		"fallback": "pullo:file-json-duotone",
	});
}

export default Component;
