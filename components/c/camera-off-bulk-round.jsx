import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxtpr87yv.css';
import '../../css/g/g_0sa-bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kxtpr87yv"/><path class="g_0sa-bqq"/></g>`,
		"fallback": "coolicons:camera-off-bulk-round",
	});
}

export default Component;
