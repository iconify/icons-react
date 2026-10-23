import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvy3labqb.css';
import '../../css/m/mbshinw4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hvy3labqb"/><path class="mbshinw4o"/></g>`,
		"fallback": "healthicons:diabetes-outline",
	});
}

export default Component;
