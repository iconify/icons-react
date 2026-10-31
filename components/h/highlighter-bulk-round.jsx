import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgmc0xmap.css';
import '../../css/y/yjoc9gb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zgmc0xmap"/><path class="yjoc9gb0p"/></g>`,
		"fallback": "coolicons:highlighter-bulk-round",
	});
}

export default Component;
