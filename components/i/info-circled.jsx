import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvqs58b1h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvqs58b1h"/>`,
		"fallback": "radix-icons:info-circled",
	});
}

export default Component;
