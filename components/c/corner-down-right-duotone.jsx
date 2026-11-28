import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w13skfbub.css';
import '../../css/e/euyqfybbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w13skfbub"/><path class="euyqfybbs primary"/></g>`,
		"fallback": "iconaut:corner-down-right-duotone",
	});
}

export default Component;
