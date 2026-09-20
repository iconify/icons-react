import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wvf93_btz.css';
import '../../css/u/uxn9vubhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wvf93_btz"/><path class="uxn9vubhm"/></g>`,
		"fallback": "keyline-icons:heart-off-sharp-two-tone",
	});
}

export default Component;
