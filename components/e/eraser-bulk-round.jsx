import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i9bos9okc.css';
import '../../css/m/me-xsyi0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i9bos9okc"/><path class="me-xsyi0z"/></g>`,
		"fallback": "coolicons:eraser-bulk-round",
	});
}

export default Component;
