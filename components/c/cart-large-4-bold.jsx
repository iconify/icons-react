import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezvnicbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezvnicbqv"/>`,
		"fallback": "solar:cart-large-4-bold",
	});
}

export default Component;
