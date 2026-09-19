import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmj1ijqie.css';
import '../../css/q/qjzua9bim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pmj1ijqie"/><path clip-rule="evenodd" class="qjzua9bim"/></g>`,
		"fallback": "healthicons:diabetes",
	});
}

export default Component;
