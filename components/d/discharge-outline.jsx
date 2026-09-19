import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9_p7sbec.css';
import '../../css/p/pi2jtkfsa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y9_p7sbec"/><path class="pi2jtkfsa"/></g>`,
		"fallback": "healthicons:discharge-outline",
	});
}

export default Component;
