import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6u1dybet.css';
import '../../css/u/uew-crbtb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6u1dybet"/><path clip-rule="evenodd" class="uew-crbtb"/></g>`,
		"fallback": "healthicons:dermatology-outline",
	});
}

export default Component;
