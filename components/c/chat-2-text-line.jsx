import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jecgmcqwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jecgmcqwf"/>`,
		"fallback": "majesticons:chat-2-text-line",
	});
}

export default Component;
