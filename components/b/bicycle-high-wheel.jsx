import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7zq3hnll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7zq3hnll"/>`,
		"fallback": "mdi:bicycle-high-wheel",
	});
}

export default Component;
