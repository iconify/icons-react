import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_n8b4bdz.css';
import '../../css/r/rfo-hbroq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_n8b4bdz"/><path class="rfo-hbroq"/></g>`,
		"fallback": "coolicons:bell-bulk-round",
	});
}

export default Component;
