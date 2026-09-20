import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szcmm9bvt.css';
import '../../css/c/c-d8l6brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szcmm9bvt"/><path clip-rule="evenodd" class="c-d8l6brf"/></g>`,
		"fallback": "reicon:archive-down2-duotone",
	});
}

export default Component;
