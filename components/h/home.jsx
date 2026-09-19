import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wdhzambec.css';
import '../../css/i/io6fmkbsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wdhzambec"/><path clip-rule="evenodd" class="io6fmkbsi"/></g>`,
		"fallback": "healthicons:home",
	});
}

export default Component;
