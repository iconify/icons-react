import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0_jamkji.css';
import '../../css/d/dn9_vjbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r0_jamkji"/><path class="dn9_vjbnt"/></g>`,
		"fallback": "coolicons:image-off-bulk-round",
	});
}

export default Component;
