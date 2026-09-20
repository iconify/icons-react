import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0m45uarn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0m45uarn"/>`,
		"fallback": "radix-icons:align-center-vertically",
	});
}

export default Component;
