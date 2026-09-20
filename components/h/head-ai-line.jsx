import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tokhx3bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tokhx3bwl"/>`,
		"fallback": "mingcute:head-ai-line",
	});
}

export default Component;
