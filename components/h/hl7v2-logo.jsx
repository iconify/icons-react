import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ws7qz2bxx.css';
import '../../css/b/br4x7dyyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ws7qz2bxx"/><path class="br4x7dyyb"/></g>`,
		"fallback": "healthicons:hl7v2-logo",
	});
}

export default Component;
