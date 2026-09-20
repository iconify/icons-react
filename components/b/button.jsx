import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0h93f7on.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0h93f7on"/>`,
		"fallback": "radix-icons:button",
	});
}

export default Component;
