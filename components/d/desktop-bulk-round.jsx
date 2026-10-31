import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r889qqats.css';
import '../../css/g/gueq_2bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r889qqats"/><path class="gueq_2bnr"/></g>`,
		"fallback": "coolicons:desktop-bulk-round",
	});
}

export default Component;
