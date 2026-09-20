import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5q0ggb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5q0ggb2t"/>`,
		"fallback": "proicons:arrow-forward",
	});
}

export default Component;
