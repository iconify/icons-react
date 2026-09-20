import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6_x74bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6_x74bov"/>`,
		"fallback": "mingcute:cake-fill",
	});
}

export default Component;
