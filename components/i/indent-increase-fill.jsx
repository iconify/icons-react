import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8-cp0bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8-cp0bpm"/>`,
		"fallback": "mingcute:indent-increase-fill",
	});
}

export default Component;
