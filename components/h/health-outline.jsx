import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvix88bif.css';
import '../../css/f/f0rv6m-ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvix88bif"/><path clip-rule="evenodd" class="f0rv6m-ez"/></g>`,
		"fallback": "solar:health-outline",
	});
}

export default Component;
