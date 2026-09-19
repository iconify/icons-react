import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nasnw15bx.css';
import '../../css/l/l-srafefx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nasnw15bx"/><path class="l-srafefx"/></g>`,
		"fallback": "healthicons:elderly",
	});
}

export default Component;
