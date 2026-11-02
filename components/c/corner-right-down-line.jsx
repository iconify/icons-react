import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4b7o400g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4b7o400g"/>`,
		"fallback": "mingcute:corner-right-down-line",
	});
}

export default Component;
