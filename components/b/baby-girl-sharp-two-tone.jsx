import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fcl0x0b8i.css';
import '../../css/e/e8wzhsdlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fcl0x0b8i"/><path class="e8wzhsdlx"/></g>`,
		"fallback": "keyline-icons:baby-girl-sharp-two-tone",
	});
}

export default Component;
