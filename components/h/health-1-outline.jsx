import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ityw18brb.css';
import '../../css/j/jshl0cs6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ityw18brb"/><path clip-rule="evenodd" class="jshl0cs6f"/></g>`,
		"fallback": "healthicons:health-1-outline",
	});
}

export default Component;
