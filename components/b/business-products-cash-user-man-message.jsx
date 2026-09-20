import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbgy7acda.css';
import '../../css/c/cuxmvrb_u.css';
import '../../css/h/h33fngsjx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbgy7acda"/><path class="cuxmvrb_u"/><path class="h33fngsjx"/>`,
		"fallback": "streamline-pixel:business-products-cash-user-man-message",
	});
}

export default Component;
