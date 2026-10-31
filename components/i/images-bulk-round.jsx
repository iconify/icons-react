import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jahhv7bmc.css';
import '../../css/g/g9tivhbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jahhv7bmc"/><path class="g9tivhbor"/></g>`,
		"fallback": "coolicons:images-bulk-round",
	});
}

export default Component;
