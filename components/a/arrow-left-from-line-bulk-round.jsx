import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldmad_xfq.css';
import '../../css/p/pu2sv5btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ldmad_xfq"/><path class="pu2sv5btb"/></g>`,
		"fallback": "coolicons:arrow-left-from-line-bulk-round",
	});
}

export default Component;
