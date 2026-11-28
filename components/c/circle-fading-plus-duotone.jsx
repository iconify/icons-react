import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/az_ephbjz.css';
import '../../css/e/e-f5tsflz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="az_ephbjz secondary"/><path class="e-f5tsflz primary"/></g>`,
		"fallback": "iconaut:circle-fading-plus-duotone",
	});
}

export default Component;
