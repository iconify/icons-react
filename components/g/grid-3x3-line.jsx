import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivoanyb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivoanyb_d"/>`,
		"fallback": "mingcute:grid-3x3-line",
	});
}

export default Component;
