import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otor3t_ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otor3t_ow"/>`,
		"fallback": "mingcute:bubble-fill",
	});
}

export default Component;
