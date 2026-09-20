import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4npdi48e.css';
import '../../css/i/i61rutual.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m4npdi48e"/><path class="i61rutual"/></g>`,
		"fallback": "keyline-icons:chart-pie-sharp-duotone",
	});
}

export default Component;
