import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqmzpk28t.css';
import '../../css/a/aope2d4kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqmzpk28t"/><path class="aope2d4kb"/></g>`,
		"fallback": "coolicons:chart-pie-bulk-round",
	});
}

export default Component;
