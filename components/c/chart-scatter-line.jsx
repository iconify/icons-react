import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttyc_3k6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttyc_3k6v"/>`,
		"fallback": "mingcute:chart-scatter-line",
	});
}

export default Component;
