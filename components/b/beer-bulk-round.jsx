import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dubddgb-a.css';
import '../../css/f/finwwtbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dubddgb-a"/><path class="finwwtbco"/></g>`,
		"fallback": "coolicons:beer-bulk-round",
	});
}

export default Component;
