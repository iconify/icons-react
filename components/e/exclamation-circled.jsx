import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgu72z-ym.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgu72z-ym"/>`,
		"fallback": "radix-icons:exclamation-circled",
	});
}

export default Component;
