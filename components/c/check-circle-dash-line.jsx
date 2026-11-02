import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4kt-3w1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4kt-3w1w"/>`,
		"fallback": "mingcute:check-circle-dash-line",
	});
}

export default Component;
