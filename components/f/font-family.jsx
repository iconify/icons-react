import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rijvy-f8c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rijvy-f8c"/>`,
		"fallback": "radix-icons:font-family",
	});
}

export default Component;
