import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwa26nbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwa26nbeg"/>`,
		"fallback": "mingcute:drink-line",
	});
}

export default Component;
