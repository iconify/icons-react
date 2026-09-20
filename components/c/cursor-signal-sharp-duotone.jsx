import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x_b4t-bkn.css';
import '../../css/i/ic78ryb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x_b4t-bkn"/><path class="ic78ryb7e"/></g>`,
		"fallback": "keyline-icons:cursor-signal-sharp-duotone",
	});
}

export default Component;
