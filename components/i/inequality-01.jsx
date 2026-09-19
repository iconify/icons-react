import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqe0ola9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqe0ola9z"/>`,
		"fallback": "hugeicons:inequality-01",
	});
}

export default Component;
