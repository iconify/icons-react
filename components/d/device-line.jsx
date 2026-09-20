import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-4z-bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-4z-bvi"/>`,
		"fallback": "ri:device-line",
	});
}

export default Component;
