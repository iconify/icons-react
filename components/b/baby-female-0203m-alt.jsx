import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgsol42ey.css';
import '../../css/q/qlou0-b5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sgsol42ey"/><path clip-rule="evenodd" class="qlou0-b5s"/></g>`,
		"fallback": "healthicons:baby-female-0203m-alt",
	});
}

export default Component;
