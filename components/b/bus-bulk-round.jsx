import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzewv3bhj.css';
import '../../css/w/wyjax0bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yzewv3bhj"/><path class="wyjax0bwg"/></g>`,
		"fallback": "coolicons:bus-bulk-round",
	});
}

export default Component;
