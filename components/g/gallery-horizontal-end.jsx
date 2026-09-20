import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lx0hu2y6h.css';
import '../../css/e/e2jxp-o6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lx0hu2y6h"/><rect class="e2jxp-o6v"/></g>`,
		"fallback": "lucide:gallery-horizontal-end",
	});
}

export default Component;
