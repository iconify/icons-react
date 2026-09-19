import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tza7uacyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tza7uacyg"/>`,
		"fallback": "hugeicons:arrow-left-05",
	});
}

export default Component;
