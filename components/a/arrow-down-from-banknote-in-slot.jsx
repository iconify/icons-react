import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytw0m4b6h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytw0m4b6h"/>`,
		"fallback": "pinhead:arrow-down-from-banknote-in-slot",
	});
}

export default Component;
