import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s37llbcjt.css';
import '../../css/g/gz33uebcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s37llbcjt"/><path clip-rule="evenodd" class="gz33uebcs"/></g>`,
		"fallback": "healthicons:i-groups-perspective-crowd",
	});
}

export default Component;
