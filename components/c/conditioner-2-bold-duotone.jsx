import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pp6a_xbzu.css';
import '../../css/g/g_y-9wbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pp6a_xbzu"/><path class="g_y-9wbke"/></g>`,
		"fallback": "solar:conditioner-2-bold-duotone",
	});
}

export default Component;
