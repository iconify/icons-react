import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru0p89b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru0p89b1p"/>`,
		"fallback": "boxicons:cart-alt-2-filled",
	});
}

export default Component;
