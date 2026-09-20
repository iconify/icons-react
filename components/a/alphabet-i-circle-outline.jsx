import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt6788bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt6788bic"/>`,
		"fallback": "mdi:alphabet-i-circle-outline",
	});
}

export default Component;
