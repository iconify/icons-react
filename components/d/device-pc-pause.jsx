import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7sysmb6e.css';
import '../../css/d/dpshrm0ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m7sysmb6e"/><path class="dpshrm0ra"/></g>`,
		"fallback": "andrsrxn:device-pc-pause",
	});
}

export default Component;
