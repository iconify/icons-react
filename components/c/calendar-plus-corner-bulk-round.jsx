import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssdm4pbde.css';
import '../../css/o/o9uygd1-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ssdm4pbde"/><path class="o9uygd1-e"/></g>`,
		"fallback": "coolicons:calendar-plus-corner-bulk-round",
	});
}

export default Component;
