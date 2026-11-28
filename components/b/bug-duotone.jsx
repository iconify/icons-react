import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tjs_uvcxd.css';
import '../../css/n/ngp2glx7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tjs_uvcxd"/><path class="ngp2glx7z primary"/></g>`,
		"fallback": "iconaut:bug-duotone",
	});
}

export default Component;
