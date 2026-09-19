import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ln1ie_bke.css';
import '../../css/o/oxdwbkqqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ln1ie_bke"/><path clip-rule="evenodd" class="oxdwbkqqp"/></g>`,
		"fallback": "healthicons:health-outline",
	});
}

export default Component;
