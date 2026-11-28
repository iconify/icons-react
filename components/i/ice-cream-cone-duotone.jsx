import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa8ni20uv.css';
import '../../css/n/naz7n7g5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fa8ni20uv secondary"/><path class="naz7n7g5b primary"/></g>`,
		"fallback": "iconaut:ice-cream-cone-duotone",
	});
}

export default Component;
