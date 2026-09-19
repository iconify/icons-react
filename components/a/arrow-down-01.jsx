import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erloabc9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erloabc9s"/>`,
		"fallback": "hugeicons:arrow-down-01",
	});
}

export default Component;
