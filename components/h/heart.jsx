import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cidg1bb9e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cidg1bb9e"/>`,
		"fallback": "radix-icons:heart",
	});
}

export default Component;
