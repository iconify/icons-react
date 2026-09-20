import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcb6erbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcb6erbjf"/>`,
		"fallback": "mdi:hat-fedora",
	});
}

export default Component;
