import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/li-2dobst.css';
import '../../css/o/o6zvk_wpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="li-2dobst"/><path class="o6zvk_wpg"/></g>`,
		"fallback": "solar:hourglass-bold-duotone",
	});
}

export default Component;
