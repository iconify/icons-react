import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h10k0p92q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h10k0p92q"/>`,
		"fallback": "mingcute:brush-3-ai-line",
	});
}

export default Component;
