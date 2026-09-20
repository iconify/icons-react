import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf2faab1e.css';
import '../../css/c/czl4vwb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf2faab1e"/><path class="czl4vwb8t"/>`,
		"fallback": "mingcute:camcorder-3-line",
	});
}

export default Component;
