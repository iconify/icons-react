import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb91dun3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb91dun3t"/>`,
		"fallback": "mingcute:button-line",
	});
}

export default Component;
