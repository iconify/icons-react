import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di23f0b_l.css';
import '../../css/s/sdusgzyyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="di23f0b_l"/><path class="sdusgzyyf"/></g>`,
		"fallback": "coolicons:hand-grab-bulk-round",
	});
}

export default Component;
