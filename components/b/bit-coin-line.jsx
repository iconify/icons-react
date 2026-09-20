import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-sqk0b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-sqk0b_c"/>`,
		"fallback": "ri:bit-coin-line",
	});
}

export default Component;
