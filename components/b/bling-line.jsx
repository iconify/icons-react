import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud11b4uxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud11b4uxl"/>`,
		"fallback": "mingcute:bling-line",
	});
}

export default Component;
