import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q68xhu0of.css';
import '../../css/w/wcesp-bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q68xhu0of"/><path class="wcesp-bra"/></g>`,
		"fallback": "keyline-icons:book-minus-sharp-duotone",
	});
}

export default Component;
