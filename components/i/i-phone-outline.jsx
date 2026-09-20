import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar8us1vws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ar8us1vws"/>`,
		"fallback": "solar:i-phone-outline",
	});
}

export default Component;
