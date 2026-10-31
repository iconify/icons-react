import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox1bc9gwd.css';
import '../../css/q/q_di5mf0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ox1bc9gwd"/><path class="q_di5mf0r"/></g>`,
		"fallback": "coolicons:heart-pulse-bulk-round",
	});
}

export default Component;
