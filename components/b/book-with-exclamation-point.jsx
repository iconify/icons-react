import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m__zv7bsd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m__zv7bsd"/>`,
		"fallback": "pinhead:book-with-exclamation-point",
	});
}

export default Component;
