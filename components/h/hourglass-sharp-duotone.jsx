import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mxnhylz1j.css';
import '../../css/z/zgsw1b4mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mxnhylz1j"/><path class="zgsw1b4mz"/></g>`,
		"fallback": "keyline-icons:hourglass-sharp-duotone",
	});
}

export default Component;
