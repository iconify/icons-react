import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrby--51b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrby--51b"/>`,
		"fallback": "mdi:earth-arrow-down",
	});
}

export default Component;
