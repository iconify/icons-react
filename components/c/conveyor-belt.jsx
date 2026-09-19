import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oehto5bul.css';
import '../../css/a/amks4peru.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oehto5bul"/><path class="amks4peru"/></g>`,
		"fallback": "at-icons:conveyor-belt",
	});
}

export default Component;
