import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zwsjuw0qk.css';
import '../../css/p/p-1hx8b8f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zwsjuw0qk"/><path class="p-1hx8b8f"/></g>`,
		"fallback": "pullo:bookmark-simple-slash-duotone",
	});
}

export default Component;
