import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fg3_ue5-m.css';
import '../../css/o/ovjpv-b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fg3_ue5-m"/><path class="ovjpv-b_u"/></g>`,
		"fallback": "keyline-icons:hand-pointer-down-sharp-duotone",
	});
}

export default Component;
