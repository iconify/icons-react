import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gj53rtl3n.css';
import '../../css/e/erwo0qyjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gj53rtl3n"/><path class="erwo0qyjk"/></g>`,
		"fallback": "coolicons:apple-bulk-round",
	});
}

export default Component;
