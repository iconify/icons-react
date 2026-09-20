import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w19g-x7au.css';
import '../../css/y/y9lmsj0_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w19g-x7au"/><path class="y9lmsj0_v"/></g>`,
		"fallback": "keyline-icons:chart-pyramid-sharp-duotone",
	});
}

export default Component;
