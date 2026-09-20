import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icb3i3bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icb3i3bav"/>`,
		"fallback": "mdi:arrow-top-circle",
	});
}

export default Component;
