import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w23ongk3m.css';
import '../../css/p/pthb-obmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w23ongk3m"/><path class="pthb-obmo"/></g>`,
		"fallback": "healthicons:clinical-fe",
	});
}

export default Component;
