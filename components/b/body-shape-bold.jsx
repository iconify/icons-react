import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7lm1kvwo.css';
import '../../css/l/l_fhkab7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7lm1kvwo"/><path class="l_fhkab7c"/></g>`,
		"fallback": "solar:body-shape-bold",
	});
}

export default Component;
