import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e6d79qrxr.css';
import '../../css/m/m48z3rbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e6d79qrxr"/><path class="m48z3rbkp"/></g>`,
		"fallback": "keyline-icons:inbox-sharp-duotone",
	});
}

export default Component;
