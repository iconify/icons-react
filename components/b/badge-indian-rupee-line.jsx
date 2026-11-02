import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do582sswp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do582sswp"/>`,
		"fallback": "mingcute:badge-indian-rupee-line",
	});
}

export default Component;
