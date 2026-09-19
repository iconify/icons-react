import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v4m1o23cu.css';
import '../../css/v/vlppg6e9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v4m1o23cu"/><path clip-rule="evenodd" class="vlppg6e9j"/></g>`,
		"fallback": "healthicons:health-worker-form",
	});
}

export default Component;
