import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gl6jn29cr.css';
import '../../css/z/zb9__jbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gl6jn29cr secondary"/><path class="primary zb9__jbyg"/></g>`,
		"fallback": "iconaut:beer-duotone",
	});
}

export default Component;
