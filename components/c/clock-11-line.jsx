import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q93vyn7tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q93vyn7tr"/>`,
		"fallback": "mingcute:clock-11-line",
	});
}

export default Component;
