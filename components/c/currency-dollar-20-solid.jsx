import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b321e1bkb.css';
import '../../css/g/gkf8244vt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b321e1bkb"/><path clip-rule="evenodd" class="gkf8244vt"/></g>`,
		"fallback": "heroicons:currency-dollar-20-solid",
	});
}

export default Component;
