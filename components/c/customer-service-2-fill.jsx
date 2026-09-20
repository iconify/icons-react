import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y00g7_bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y00g7_bxy"/>`,
		"fallback": "ri:customer-service-2-fill",
	});
}

export default Component;
