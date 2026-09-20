import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4hl1y05t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4hl1y05t"/>`,
		"fallback": "ri:clockwise-2-line",
	});
}

export default Component;
