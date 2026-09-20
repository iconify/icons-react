import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bot5o0b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bot5o0b_r"/>`,
		"fallback": "mdi:account-file-text-outline",
	});
}

export default Component;
