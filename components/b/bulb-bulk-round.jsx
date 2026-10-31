import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyhc90b0f.css';
import '../../css/p/pk-3hg67t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xyhc90b0f"/><path class="pk-3hg67t"/></g>`,
		"fallback": "coolicons:bulb-bulk-round",
	});
}

export default Component;
