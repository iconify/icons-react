import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epq058iwy.css';
import '../../css/o/ouvzgodlz.css';
import '../../css/k/ks0_yrbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epq058iwy"/><path clip-rule="evenodd" class="ouvzgodlz"/><path class="ks0_yrbsb"/></g>`,
		"fallback": "healthicons:dental-hygiene2x-outline",
	});
}

export default Component;
