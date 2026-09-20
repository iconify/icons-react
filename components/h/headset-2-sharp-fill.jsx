import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g5-_p6opp.css';
import '../../css/m/mxbtz3bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g5-_p6opp"/><path class="mxbtz3bkm"/></g>`,
		"fallback": "keyline-icons:headset-2-sharp-fill",
	});
}

export default Component;
