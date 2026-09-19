import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtuftdbay.css';
import '../../css/l/l_s9xtbtr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rtuftdbay"/><path class="l_s9xtbtr"/></g>`,
		"fallback": "bi:badge-ar-fill",
	});
}

export default Component;
