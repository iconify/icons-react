import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rup2ssb3y.css';
import '../../css/d/d20toybrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rup2ssb3y"/><path class="d20toybrp"/></g>`,
		"fallback": "healthicons:insecticide-resistance2x-outline",
	});
}

export default Component;
