import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/poo9g8bhr.css';
import '../../css/b/bivafd74t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="poo9g8bhr"/><path clip-rule="evenodd" class="bivafd74t"/></g>`,
		"fallback": "heroicons-solid:cpu-chip",
	});
}

export default Component;
