import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib8ghnj8c.css';
import '../../css/d/dhzql506t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ib8ghnj8c"/><path class="dhzql506t"/></g>`,
		"fallback": "coolicons:cpu-bulk-round",
	});
}

export default Component;
