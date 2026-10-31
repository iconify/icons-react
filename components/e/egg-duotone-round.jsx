import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v80rx_bgt.css';
import '../../css/y/ycx3-jb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v80rx_bgt"/><path class="ycx3-jb_k"/></g>`,
		"fallback": "coolicons:egg-duotone-round",
	});
}

export default Component;
