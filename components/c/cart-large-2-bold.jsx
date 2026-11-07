import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vraidxb4w.css';
import '../../css/s/s0u7hix8w.css';
import '../../css/r/rg3j4qb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vraidxb4w"/><path class="s0u7hix8w"/><path class="rg3j4qb_y"/>`,
		"fallback": "solar:cart-large-2-bold",
	});
}

export default Component;
