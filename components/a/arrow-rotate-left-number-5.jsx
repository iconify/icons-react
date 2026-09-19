import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1auylrms.css';
import '../../css/k/k09h-2h0n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1auylrms"/><path class="k09h-2h0n"/></g>`,
		"fallback": "gravity-ui:arrow-rotate-left-number-5",
	});
}

export default Component;
