import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8-gi9vyb.css';
import '../../css/r/rceiv1tin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8-gi9vyb"/><path clip-rule="evenodd" class="rceiv1tin"/></g>`,
		"fallback": "keyline-icons:file-sharp-duotone",
	});
}

export default Component;
