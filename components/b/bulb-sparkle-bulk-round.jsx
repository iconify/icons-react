import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyhc90b0f.css';
import '../../css/d/dfaxbqgfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xyhc90b0f"/><path class="dfaxbqgfu"/></g>`,
		"fallback": "coolicons:bulb-sparkle-bulk-round",
	});
}

export default Component;
