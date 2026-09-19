import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrhuz0bme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrhuz0bme"/>`,
		"fallback": "bx:bxs-cloud",
	});
}

export default Component;
