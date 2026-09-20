import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/avxzc_4lt.css';
import '../../css/r/rrrbrgbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="avxzc_4lt"/><path class="rrrbrgbtp"/></g>`,
		"fallback": "keyline-icons:diagram-successor-sharp-two-tone",
	});
}

export default Component;
