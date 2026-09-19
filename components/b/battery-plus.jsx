import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2wc9qr1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2wc9qr1l"/>`,
		"fallback": "hugeicons:battery-plus",
	});
}

export default Component;
