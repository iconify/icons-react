import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hspmtbc_a.css';
import '../../css/w/w715e_nej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hspmtbc_a"/><path class="w715e_nej"/></g>`,
		"fallback": "solar:diagram-up-outline",
	});
}

export default Component;
