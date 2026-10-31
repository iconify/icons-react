import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gi7bh9b5p.css';
import '../../css/q/q4nqx3z6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gi7bh9b5p"/><path class="q4nqx3z6x"/></g>`,
		"fallback": "coolicons:hammer-bulk-round",
	});
}

export default Component;
