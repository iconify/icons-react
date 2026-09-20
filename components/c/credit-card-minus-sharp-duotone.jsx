import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pi2qqqb_t.css';
import '../../css/o/oq8zmj42d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pi2qqqb_t"/><path class="oq8zmj42d"/></g>`,
		"fallback": "keyline-icons:credit-card-minus-sharp-duotone",
	});
}

export default Component;
