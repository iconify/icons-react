import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8x7dcbks.css';
import '../../css/t/t_pqw8uqz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8x7dcbks"/><path clip-rule="evenodd" class="t_pqw8uqz"/></g>`,
		"fallback": "glyphs:hard-drive-bold",
	});
}

export default Component;
