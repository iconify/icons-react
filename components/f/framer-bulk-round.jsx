import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxpfe8woi.css';
import '../../css/b/bt23kfbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxpfe8woi"/><path class="bt23kfbkz"/></g>`,
		"fallback": "coolicons:framer-bulk-round",
	});
}

export default Component;
