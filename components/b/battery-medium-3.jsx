import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_tsh2bdz.css';
import '../../css/s/su7eb7b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j_tsh2bdz"/><path class="su7eb7b6v"/></g>`,
		"fallback": "streamline-sharp:battery-medium-3",
	});
}

export default Component;
