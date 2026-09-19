import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu5wgkbfh.css';
import '../../css/h/hj_d86v7e.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cu5wgkbfh"/><path class="hj_d86v7e"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:calm2x-outline",
	});
}

export default Component;
