import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7tx4ibpk.css';
import '../../css/n/ndbgxcbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k7tx4ibpk"/><path class="ndbgxcbvk"/></g>`,
		"fallback": "healthicons:crying-24px",
	});
}

export default Component;
