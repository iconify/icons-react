import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uv1xy_bfm.css';
import '../../css/d/dsv_7wxma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uv1xy_bfm"/><path class="dsv_7wxma primary"/></g>`,
		"fallback": "iconaut:hockey-stick-duotone",
	});
}

export default Component;
