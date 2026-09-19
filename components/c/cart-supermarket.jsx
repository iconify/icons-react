import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvtgyfbov.css';

const viewBox = {"width":512,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvtgyfbov"/>`,
		"fallback": "ps:cart-supermarket",
	});
}

export default Component;
