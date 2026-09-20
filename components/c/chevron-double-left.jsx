import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhvoj9eul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhvoj9eul"/>`,
		"fallback": "mdi:chevron-double-left",
	});
}

export default Component;
