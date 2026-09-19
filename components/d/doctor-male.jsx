import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6id0lbwz.css';
import '../../css/m/mxns_2bzi.css';
import '../../css/s/shbvfpb7n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h6id0lbwz"/><path class="mxns_2bzi"/><path class="shbvfpb7n"/></g>`,
		"fallback": "healthicons:doctor-male",
	});
}

export default Component;
