import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t18f1nbvx.css';
import '../../css/c/cl1iidb0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t18f1nbvx"/><path class="cl1iidb0h"/></g>`,
		"fallback": "bi:calendar2-date-fill",
	});
}

export default Component;
