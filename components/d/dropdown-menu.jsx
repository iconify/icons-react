import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sec6prbjz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sec6prbjz"/>`,
		"fallback": "radix-icons:dropdown-menu",
	});
}

export default Component;
