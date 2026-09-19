import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9mdn9b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9mdn9b0m"/>`,
		"fallback": "boxicons:book-content-filled",
	});
}

export default Component;
