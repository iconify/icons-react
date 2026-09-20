import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j41a42nnh.css';
import '../../css/t/twf0j0bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j41a42nnh"/><path class="twf0j0bag"/></g>`,
		"fallback": "keyline-icons:coins-sharp-two-tone",
	});
}

export default Component;
