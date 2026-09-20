import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8gxebc8t.css';
import '../../css/k/kw5t8mb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i8gxebc8t"/><path class="kw5t8mb7z"/></g>`,
		"fallback": "solar:bolt-bold-duotone",
	});
}

export default Component;
