import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6pkljbys.css';
import '../../css/f/fqtyq4s6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6pkljbys"/><path class="fqtyq4s6p"/></g>`,
		"fallback": "coolicons:chevron-left-to-line-bulk-round",
	});
}

export default Component;
