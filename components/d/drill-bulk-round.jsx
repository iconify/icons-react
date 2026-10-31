import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nzsebfl-m.css';
import '../../css/n/nfqcfp0_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nzsebfl-m"/><path class="nfqcfp0_n"/></g>`,
		"fallback": "coolicons:drill-bulk-round",
	});
}

export default Component;
