import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txxypwbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txxypwbka"/>`,
		"fallback": "mingcute:arrow-big-up-dash-fill",
	});
}

export default Component;
