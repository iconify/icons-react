import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_qzm70hz.css';
import '../../css/v/vtr87b2ik.css';
import '../../css/c/cllgogb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h_qzm70hz"/><path class="vtr87b2ik"/><path clip-rule="evenodd" class="cllgogb_y"/></g>`,
		"fallback": "solar:binoculars-bold",
	});
}

export default Component;
