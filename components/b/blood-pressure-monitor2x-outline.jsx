import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqtbvlb1g.css';
import '../../css/r/rbof6kbxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oqtbvlb1g"/><path clip-rule="evenodd" class="rbof6kbxx"/></g>`,
		"fallback": "healthicons:blood-pressure-monitor2x-outline",
	});
}

export default Component;
