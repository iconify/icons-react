import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qt8n4vwmc.css';
import '../../css/m/mihs-n4ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qt8n4vwmc"/><path class="mihs-n4ak"/></g>`,
		"fallback": "coolicons:git-merge-bulk-round",
	});
}

export default Component;
