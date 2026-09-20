import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/llbfeksdq.css';
import '../../css/e/ehok5_p-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="llbfeksdq"/><path class="ehok5_p-l"/></g>`,
		"fallback": "keyline-icons:bell-dot-sharp-two-tone",
	});
}

export default Component;
