import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aqa72m1-n.css';
import '../../css/k/ka6ebhzpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="aqa72m1-n"/><path class="ka6ebhzpv"/></g>`,
		"fallback": "keyline-icons:bed-double-sharp-two-tone",
	});
}

export default Component;
