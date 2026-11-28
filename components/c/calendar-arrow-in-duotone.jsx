import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0tmt2qum.css';
import '../../css/r/rbm85mado.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k0tmt2qum"/><path class="rbm85mado"/></g>`,
		"fallback": "pullo:calendar-arrow-in-duotone",
	});
}

export default Component;
