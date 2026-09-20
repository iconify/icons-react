import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmv3ifp5h.css';
import '../../css/y/y4ts276ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vmv3ifp5h"/><path class="y4ts276ky"/></g>`,
		"fallback": "reicon:bone-broken-duotone",
	});
}

export default Component;
