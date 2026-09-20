import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttdwwrvcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttdwwrvcu"/>`,
		"fallback": "mdi:briefcase-arrow-up-down-outline",
	});
}

export default Component;
