import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvuh11b-h.css';
import '../../css/n/nsd4efeon.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rvuh11b-h"/><path class="nsd4efeon"/></g>`,
		"fallback": "healthicons:forum",
	});
}

export default Component;
