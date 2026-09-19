import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6z_ibt7v.css';
import '../../css/m/m2w1xbb-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s6z_ibt7v"/><path class="m2w1xbb-t"/></g>`,
		"fallback": "healthicons:asthma-inhaler2x-outline",
	});
}

export default Component;
