import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4p9_pvsu.css';
import '../../css/y/y4t3tjb_d.css';
import '../../css/d/djh-j8-ck.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p4p9_pvsu"/><path class="y4t3tjb_d"/><path clip-rule="evenodd" class="djh-j8-ck"/></g>`,
		"fallback": "healthicons:cpap-machine2x-outline",
	});
}

export default Component;
