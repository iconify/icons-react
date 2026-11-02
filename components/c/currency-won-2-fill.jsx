import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_h5l6mzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_h5l6mzu"/>`,
		"fallback": "mingcute:currency-won-2-fill",
	});
}

export default Component;
