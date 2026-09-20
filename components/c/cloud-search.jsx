import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyaa1ib5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyaa1ib5o"/>`,
		"fallback": "mdi:cloud-search",
	});
}

export default Component;
