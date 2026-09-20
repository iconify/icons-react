import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar1m2gsxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar1m2gsxl"/>`,
		"fallback": "mdi:compare-horizontal",
	});
}

export default Component;
