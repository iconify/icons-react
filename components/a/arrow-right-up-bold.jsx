import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn9p7b49h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn9p7b49h"/>`,
		"fallback": "solar:arrow-right-up-bold",
	});
}

export default Component;
