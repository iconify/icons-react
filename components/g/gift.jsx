import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pcpe90boo.css';
import '../../css/a/a9x8odckt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pcpe90boo"/><path class="a9x8odckt"/></g>`,
		"fallback": "heroicons-solid:gift",
	});
}

export default Component;
