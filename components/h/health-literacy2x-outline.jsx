import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8ri4r_8m.css';
import '../../css/w/w7d7mlbak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8ri4r_8m"/><path clip-rule="evenodd" class="w7d7mlbak"/></g>`,
		"fallback": "healthicons:health-literacy2x-outline",
	});
}

export default Component;
