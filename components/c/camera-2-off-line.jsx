import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oykyflbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oykyflbit"/>`,
		"fallback": "mingcute:camera-2-off-line",
	});
}

export default Component;
