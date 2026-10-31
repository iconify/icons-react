import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dj6g0tt9v.css';
import '../../css/r/rfv7_ep_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dj6g0tt9v"/><path class="rfv7_ep_k"/></g>`,
		"fallback": "coolicons:broadcast-bulk-round",
	});
}

export default Component;
