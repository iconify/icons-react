import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okhq2r87b.css';
import '../../css/b/bn49tvbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="okhq2r87b"/><path class="bn49tvbfn"/></g>`,
		"fallback": "iconaut:cake-solid",
	});
}

export default Component;
