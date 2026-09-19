import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w29pu9vcg.css';
import '../../css/x/xw0-qqx6q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w29pu9vcg"/><path clip-rule="evenodd" class="xw0-qqx6q"/></g>`,
		"fallback": "healthicons:contraceptive-voucher",
	});
}

export default Component;
