import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp6sg1bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp6sg1bsd"/>`,
		"fallback": "mdi:image-filter-none",
	});
}

export default Component;
