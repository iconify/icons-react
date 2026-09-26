import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xj7ensnzg.css';
import '../../css/v/v48m3_bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xj7ensnzg"/><path class="v48m3_bsm"/></g>`,
		"fallback": "solar:copy-check-bold-duotone",
	});
}

export default Component;
