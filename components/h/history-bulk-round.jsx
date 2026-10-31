import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c54zq2pps.css';
import '../../css/r/rr_ij0s4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c54zq2pps"/><path class="rr_ij0s4i"/></g>`,
		"fallback": "coolicons:history-bulk-round",
	});
}

export default Component;
