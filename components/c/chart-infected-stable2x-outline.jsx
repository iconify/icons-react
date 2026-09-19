import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yhudq1ycc.css';
import '../../css/m/m-walhbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yhudq1ycc"/><path clip-rule="evenodd" class="m-walhbwi"/></g>`,
		"fallback": "healthicons:chart-infected-stable2x-outline",
	});
}

export default Component;
