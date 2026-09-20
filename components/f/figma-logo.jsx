import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4jai2f8o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4jai2f8o"/>`,
		"fallback": "radix-icons:figma-logo",
	});
}

export default Component;
