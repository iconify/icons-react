import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvfvcac4m.css';
import '../../css/o/ou3x2pt-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvfvcac4m"/><path class="ou3x2pt-x"/></g>`,
		"fallback": "coolicons:chart-sparkle-bulk-round",
	});
}

export default Component;
