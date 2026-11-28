import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/orfsnug8k.css';
import '../../css/s/sfat-vbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="orfsnug8k secondary"/><path class="primary sfat-vbps"/></g>`,
		"fallback": "iconaut:bomb-duotone",
	});
}

export default Component;
