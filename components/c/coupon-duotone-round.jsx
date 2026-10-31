import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr22nipjt.css';
import '../../css/w/wrm2lsbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dr22nipjt"/><path class="wrm2lsbzm"/></g>`,
		"fallback": "coolicons:coupon-duotone-round",
	});
}

export default Component;
