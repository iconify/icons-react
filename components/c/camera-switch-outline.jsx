import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lws288b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lws288b7u"/>`,
		"fallback": "mdi:camera-switch-outline",
	});
}

export default Component;
