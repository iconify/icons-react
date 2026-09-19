import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxdt4rk6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxdt4rk6x"/>`,
		"fallback": "heroicons-outline:arrow-left-circle",
	});
}

export default Component;
