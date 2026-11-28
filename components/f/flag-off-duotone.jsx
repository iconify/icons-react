import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfb5tcb3j.css';
import '../../css/e/e1v6s64bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfb5tcb3j secondary"/><path class="e1v6s64bc primary"/></g>`,
		"fallback": "iconaut:flag-off-duotone",
	});
}

export default Component;
