import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u82vmwtfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u82vmwtfl"/>`,
		"fallback": "mingcute:align-arrow-right-fill",
	});
}

export default Component;
