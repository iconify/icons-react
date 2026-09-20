import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oixm9mbkq.css';
import '../../css/f/f-n3xro7a.css';
import '../../css/p/pxo13_1dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oixm9mbkq"/><path clip-rule="evenodd" class="f-n3xro7a"/><path class="pxo13_1dv"/></g>`,
		"fallback": "solar:battery-charge-minimalistic-outline",
	});
}

export default Component;
