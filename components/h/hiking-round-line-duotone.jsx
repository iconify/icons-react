import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/r/rut37sbqn.css';
import '../../css/i/ig236ibqn.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/l/lu37x4boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="rut37sbqn"/><path class="ig236ibqn"/><path class="cu7xy9b9y"/><path class="lu37x4boy"/></g>`,
		"fallback": "solar:hiking-round-line-duotone",
	});
}

export default Component;
