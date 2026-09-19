import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sail_qa3o.css';
import '../../css/k/k3yu_49bv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sail_qa3o"/><path class="k3yu_49bv"/></g>`,
		"fallback": "bi:heart-pulse-fill",
	});
}

export default Component;
