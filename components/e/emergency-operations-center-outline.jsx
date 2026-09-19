import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znkbcobku.css';
import '../../css/y/y-qjcibit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="znkbcobku"/><path clip-rule="evenodd" class="y-qjcibit"/></g>`,
		"fallback": "healthicons:emergency-operations-center-outline",
	});
}

export default Component;
