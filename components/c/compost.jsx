import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar1370yxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar1370yxm"/>`,
		"fallback": "mdi:compost",
	});
}

export default Component;
