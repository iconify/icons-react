import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyiumx5dq.css';
import '../../css/s/szz0j1wwy.css';
import '../../css/x/x26wrsjtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hyiumx5dq"/><path class="szz0j1wwy"/><path clip-rule="evenodd" class="x26wrsjtl"/></g>`,
		"fallback": "healthicons:blood-pressure2x-outline",
	});
}

export default Component;
