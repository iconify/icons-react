import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/midyvjbpi.css';
import '../../css/k/ks0_yrbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="midyvjbpi"/><path class="ks0_yrbsb"/></g>`,
		"fallback": "healthicons:dental-hygiene",
	});
}

export default Component;
