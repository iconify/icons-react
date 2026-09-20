import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m8netx35k.css';
import '../../css/p/pve7dkb2j.css';
import '../../css/q/qgl0b2pvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m8netx35k"/><path class="pve7dkb2j"/><path class="qgl0b2pvl"/></g>`,
		"fallback": "solar:hand-shake-line-duotone",
	});
}

export default Component;
