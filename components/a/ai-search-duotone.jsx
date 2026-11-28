import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9z24nbtx.css';
import '../../css/q/qdc__bcgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9z24nbtx secondary"/><path class="primary qdc__bcgx"/></g>`,
		"fallback": "iconaut:ai-search-duotone",
	});
}

export default Component;
