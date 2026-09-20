import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m34cnpb4k.css';
import '../../css/r/rvfqn4--e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m34cnpb4k"/><path class="rvfqn4--e"/></g>`,
		"fallback": "reicon:download-filled",
	});
}

export default Component;
