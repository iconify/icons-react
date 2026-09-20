import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-e0uee1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-e0uee1w"/>`,
		"fallback": "mingcute:chart-vertical-line",
	});
}

export default Component;
