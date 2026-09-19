import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhetl1bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhetl1bkn"/>`,
		"fallback": "bx:bxs-mobile",
	});
}

export default Component;
