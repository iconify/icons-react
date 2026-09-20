import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns9o89kkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns9o89kkf"/>`,
		"fallback": "mdi:corn",
	});
}

export default Component;
