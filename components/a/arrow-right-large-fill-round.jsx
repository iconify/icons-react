import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0_57np6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0_57np6e"/>`,
		"fallback": "coolicons:arrow-right-large-fill-round",
	});
}

export default Component;
