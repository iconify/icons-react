import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gwenmwfcc.css';
import '../../css/y/y5i59r_te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="gwenmwfcc"/><path class="y5i59r_te"/></g>`,
		"fallback": "keyline-icons:briefcase-sharp-fill",
	});
}

export default Component;
