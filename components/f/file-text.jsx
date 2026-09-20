import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yec-pnbis.css';
import '../../css/c/cw70li2iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yec-pnbis"/><path class="cw70li2iz"/></g>`,
		"fallback": "pixelarticons:file-text",
	});
}

export default Component;
