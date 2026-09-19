import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji14mos9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji14mos9b"/>`,
		"fallback": "hugeicons:heart-off",
	});
}

export default Component;
