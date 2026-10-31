import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lim_lesma.css';
import '../../css/p/p8or_gjla.css';
import '../../css/c/cfnmr-b-v.css';
import '../../css/w/wc08x_b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lim_lesma wm-shadow"/><path class="p8or_gjla wm-shadow"/><path class="cfnmr-b-v"/><path class="wc08x_b5p"/></g>`,
		"fallback": "withicons-brutal:avatar-bear",
	});
}

export default Component;
