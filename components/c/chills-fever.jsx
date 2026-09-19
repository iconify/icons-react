import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mntwc-b8k.css';
import '../../css/e/es46yqyih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mntwc-b8k"/><path clip-rule="evenodd" class="es46yqyih"/></g>`,
		"fallback": "healthicons:chills-fever",
	});
}

export default Component;
