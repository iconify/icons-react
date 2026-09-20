import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w4srdrbby.css';
import '../../css/z/zgmm89b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w4srdrbby"/><path class="zgmm89b9r"/></g>`,
		"fallback": "keyline-icons:alarm-clock-plus-sharp-duotone",
	});
}

export default Component;
