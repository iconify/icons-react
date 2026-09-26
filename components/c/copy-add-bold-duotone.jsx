import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v48m3_bsm.css';
import '../../css/z/ztiwdsbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v48m3_bsm"/><path clip-rule="evenodd" class="ztiwdsbrw"/></g>`,
		"fallback": "solar:copy-add-bold-duotone",
	});
}

export default Component;
