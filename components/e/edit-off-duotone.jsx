import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0qs4lbre.css';
import '../../css/y/yzljdhmnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0qs4lbre secondary"/><path class="primary yzljdhmnf"/></g>`,
		"fallback": "iconaut:edit-off-duotone",
	});
}

export default Component;
