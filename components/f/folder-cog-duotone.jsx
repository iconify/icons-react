import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j15cvv4sl.css';
import '../../css/t/t711ppbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j15cvv4sl secondary"/><path class="primary t711ppbmr"/></g>`,
		"fallback": "iconaut:folder-cog-duotone",
	});
}

export default Component;
