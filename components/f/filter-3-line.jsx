import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di9mx7u9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di9mx7u9c"/>`,
		"fallback": "mingcute:filter-3-line",
	});
}

export default Component;
