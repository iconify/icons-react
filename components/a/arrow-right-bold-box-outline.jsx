import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybvagrb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybvagrb2u"/>`,
		"fallback": "mdi:arrow-right-bold-box-outline",
	});
}

export default Component;
