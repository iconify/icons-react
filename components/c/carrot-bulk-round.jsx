import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vuwfr6bul.css';
import '../../css/c/cz74op0fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vuwfr6bul"/><path class="cz74op0fm"/></g>`,
		"fallback": "coolicons:carrot-bulk-round",
	});
}

export default Component;
