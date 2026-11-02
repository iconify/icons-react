import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0vko-r_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0vko-r_m"/>`,
		"fallback": "mingcute:full-moon-line",
	});
}

export default Component;
