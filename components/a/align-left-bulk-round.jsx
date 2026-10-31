import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yfoifzbac.css';
import '../../css/i/iz1sfcctr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yfoifzbac"/><path class="iz1sfcctr"/></g>`,
		"fallback": "coolicons:align-left-bulk-round",
	});
}

export default Component;
