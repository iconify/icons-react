import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpjio5o_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpjio5o_t"/>`,
		"fallback": "mingcute:dice-4-line",
	});
}

export default Component;
