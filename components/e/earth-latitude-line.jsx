import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke28dhbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke28dhbov"/>`,
		"fallback": "mingcute:earth-latitude-line",
	});
}

export default Component;
