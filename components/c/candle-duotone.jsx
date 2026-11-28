import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t4g1nbbia.css';
import '../../css/m/mlv1brb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t4g1nbbia"/><path class="mlv1brb-r primary"/></g>`,
		"fallback": "iconaut:candle-duotone",
	});
}

export default Component;
