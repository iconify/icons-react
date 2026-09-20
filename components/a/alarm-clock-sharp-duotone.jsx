import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w4srdrbby.css';
import '../../css/u/uavl7ab-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w4srdrbby"/><path class="uavl7ab-f"/></g>`,
		"fallback": "keyline-icons:alarm-clock-sharp-duotone",
	});
}

export default Component;
