import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgipp0bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgipp0bbm"/>`,
		"fallback": "mingcute:edit-2-ai-line",
	});
}

export default Component;
