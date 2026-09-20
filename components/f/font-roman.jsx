import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne6vqlbmy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne6vqlbmy"/>`,
		"fallback": "radix-icons:font-roman",
	});
}

export default Component;
