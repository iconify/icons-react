import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt26bdcbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt26bdcbc"/>`,
		"fallback": "mdi:house-alert-outline",
	});
}

export default Component;
