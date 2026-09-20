import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chu4txbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chu4txbfi"/>`,
		"fallback": "majesticons:code-block-line",
	});
}

export default Component;
