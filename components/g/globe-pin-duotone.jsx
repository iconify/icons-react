import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lo15r6bvx.css';
import '../../css/z/z34cyi67u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lo15r6bvx secondary"/><path class="primary z34cyi67u"/></g>`,
		"fallback": "iconaut:globe-pin-duotone",
	});
}

export default Component;
