import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7msnsb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7msnsb9u"/>`,
		"fallback": "boxicons:globe-asia-filled",
	});
}

export default Component;
