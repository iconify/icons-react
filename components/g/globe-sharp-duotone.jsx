import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v80--9b_b.css';
import '../../css/v/vzahb9b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v80--9b_b"/><path class="vzahb9b9j"/></g>`,
		"fallback": "keyline-icons:globe-sharp-duotone",
	});
}

export default Component;
