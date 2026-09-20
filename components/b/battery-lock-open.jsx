import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h50gsac4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h50gsac4i"/>`,
		"fallback": "mdi:battery-lock-open",
	});
}

export default Component;
