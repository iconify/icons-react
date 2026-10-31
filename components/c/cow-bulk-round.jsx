import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq6j04bjz.css';
import '../../css/v/vz76vqtbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uq6j04bjz"/><path class="vz76vqtbp"/></g>`,
		"fallback": "coolicons:cow-bulk-round",
	});
}

export default Component;
