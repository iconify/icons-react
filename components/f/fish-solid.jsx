import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crpchj1xv.css';
import '../../css/b/byl6ama3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="crpchj1xv"/><path clip-rule="evenodd" class="byl6ama3f"/></g>`,
		"fallback": "flowbite:fish-solid",
	});
}

export default Component;
