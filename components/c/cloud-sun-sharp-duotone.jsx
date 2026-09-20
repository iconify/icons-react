import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cy44qgphq.css';
import '../../css/p/ptuj23bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cy44qgphq"/><path class="ptuj23bwm"/></g>`,
		"fallback": "keyline-icons:cloud-sun-sharp-duotone",
	});
}

export default Component;
