import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0ytv9bih.css';
import '../../css/d/db4xy6bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i0ytv9bih"/><path class="db4xy6bae"/></g>`,
		"fallback": "flowbite:hotdog-solid",
	});
}

export default Component;
