import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eagkf8bqk.css';
import '../../css/v/v59z2ccas.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/ezz1s8b2f.css';
import '../../css/d/dba7q3bhb.css';
import '../../css/z/zxds2l2_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eagkf8bqk"/><path class="v59z2ccas"/><g class="mc2zb0bvp"><path class="ezz1s8b2f"/><path class="dba7q3bhb"/><path class="zxds2l2_n"/></g></g>`,
		"fallback": "solar:align-horizontal-center-bold-duotone",
	});
}

export default Component;
