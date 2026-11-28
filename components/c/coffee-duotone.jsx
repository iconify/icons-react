import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsseu8b9d.css';
import '../../css/j/j183xob-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jsseu8b9d secondary"/><path class="j183xob-n primary"/></g>`,
		"fallback": "iconaut:coffee-duotone",
	});
}

export default Component;
