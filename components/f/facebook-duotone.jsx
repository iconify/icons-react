import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1an75b9v.css';
import '../../css/l/lo2_c8b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1an75b9v secondary"/><path class="lo2_c8b9w primary"/></g>`,
		"fallback": "iconaut:facebook-duotone",
	});
}

export default Component;
