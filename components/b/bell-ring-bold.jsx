import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfx_06b9l.css';
import '../../css/b/b5w8fdxxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dfx_06b9l"/><path clip-rule="evenodd" class="b5w8fdxxa"/></g>`,
		"fallback": "solar:bell-ring-bold",
	});
}

export default Component;
