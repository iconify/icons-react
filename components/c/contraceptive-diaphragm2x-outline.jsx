import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifw-3tbef.css';
import '../../css/k/kcbnqacwn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifw-3tbef"/><path clip-rule="evenodd" class="kcbnqacwn"/></g>`,
		"fallback": "healthicons:contraceptive-diaphragm2x-outline",
	});
}

export default Component;
