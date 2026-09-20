import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/ta4rilxqc.css';
import '../../css/k/ku_l8ycyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ta4rilxqc"/><path class="ku_l8ycyv"/></g>`,
		"fallback": "keyline-icons:crown-sharp-two-tone",
	});
}

export default Component;
