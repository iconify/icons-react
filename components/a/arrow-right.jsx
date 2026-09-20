import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo1y8cbed.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo1y8cbed"/>`,
		"fallback": "radix-icons:arrow-right",
	});
}

export default Component;
