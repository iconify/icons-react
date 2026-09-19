import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfb-nmuvg.css';
import '../../css/z/zwu2hyb8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wfb-nmuvg"/><path clip-rule="evenodd" class="zwu2hyb8k"/></g>`,
		"fallback": "healthicons:discharge-lounge-outline",
	});
}

export default Component;
