import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojqpoteog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojqpoteog"/>`,
		"fallback": "mingcute:box-4-fill",
	});
}

export default Component;
