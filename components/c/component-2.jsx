import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1pjvgx8j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1pjvgx8j"/>`,
		"fallback": "radix-icons:component-2",
	});
}

export default Component;
