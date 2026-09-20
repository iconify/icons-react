import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yopdcqsuw.css';
import '../../css/p/pxqe3nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yopdcqsuw"/><path class="pxqe3nblm"/></g>`,
		"fallback": "keyline-icons:arrow-down-wide-narrow-sharp-duotone",
	});
}

export default Component;
