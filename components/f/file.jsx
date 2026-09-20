import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yec-pnbis.css';
import '../../css/w/w2hbmfb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yec-pnbis"/><path class="w2hbmfb0p"/></g>`,
		"fallback": "pixelarticons:file",
	});
}

export default Component;
