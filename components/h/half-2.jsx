import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr507ebah.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr507ebah"/>`,
		"fallback": "radix-icons:half-2",
	});
}

export default Component;
