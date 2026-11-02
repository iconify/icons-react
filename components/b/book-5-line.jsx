import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f32zxbc_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f32zxbc_u"/>`,
		"fallback": "mingcute:book-5-line",
	});
}

export default Component;
