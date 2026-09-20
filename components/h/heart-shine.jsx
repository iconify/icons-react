import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3rov_nmk.css';
import '../../css/p/pj530ypns.css';
import '../../css/l/l2hwysa-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v3rov_nmk"/><path clip-rule="evenodd" class="pj530ypns"/><path class="l2hwysa-h"/></g>`,
		"fallback": "reicon:heart-shine",
	});
}

export default Component;
