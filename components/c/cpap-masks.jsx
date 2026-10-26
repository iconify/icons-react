import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m02nh0bjz.css';
import '../../css/q/qlw-z4bkp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m02nh0bjz"/><path class="qlw-z4bkp"/></g>`,
		"fallback": "healthicons:cpap-masks",
	});
}

export default Component;
