import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk6bg3bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk6bg3bqz"/>`,
		"fallback": "keyline-icons:heart",
	});
}

export default Component;
