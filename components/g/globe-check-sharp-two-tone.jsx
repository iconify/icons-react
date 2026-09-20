import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/urdyx_lzo.css';
import '../../css/o/ojqffaclp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="urdyx_lzo"/><path class="ojqffaclp"/></g>`,
		"fallback": "keyline-icons:globe-check-sharp-two-tone",
	});
}

export default Component;
