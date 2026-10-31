import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7o62xr4u.css';
import '../../css/p/pdrtlpb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7o62xr4u"/><path class="pdrtlpb4h"/></g>`,
		"fallback": "coolicons:cake-bulk-round",
	});
}

export default Component;
