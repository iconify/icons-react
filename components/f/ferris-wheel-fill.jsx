import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut_z27wac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut_z27wac"/>`,
		"fallback": "mingcute:ferris-wheel-fill",
	});
}

export default Component;
