import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cq5fgnbzq.css';
import '../../css/o/oqtrjux1w.css';
import '../../css/y/y2nul6bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cq5fgnbzq"/><path class="oqtrjux1w"/><path class="y2nul6bzn"/></g>`,
		"fallback": "reicon:earth-filled",
	});
}

export default Component;
