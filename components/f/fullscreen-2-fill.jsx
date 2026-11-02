import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t55x_obhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t55x_obhi"/>`,
		"fallback": "mingcute:fullscreen-2-fill",
	});
}

export default Component;
