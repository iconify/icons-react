import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp4g854do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp4g854do"/>`,
		"fallback": "mingcute:check-circle-dash-line",
	});
}

export default Component;
