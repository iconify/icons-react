import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yxkpozb3k.css';
import '../../css/a/a89hm0bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yxkpozb3k"/><path class="a89hm0bcg"/></g>`,
		"fallback": "coolicons:factory-bulk-round",
	});
}

export default Component;
