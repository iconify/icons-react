import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3i8yv6ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3i8yv6ks"/>`,
		"fallback": "tabler:device-ipad-pause",
	});
}

export default Component;
