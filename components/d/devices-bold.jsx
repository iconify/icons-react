import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3tmlwbvp.css';
import '../../css/g/ghk23m3hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i3tmlwbvp"/><path clip-rule="evenodd" class="ghk23m3hv"/></g>`,
		"fallback": "solar:devices-bold",
	});
}

export default Component;
