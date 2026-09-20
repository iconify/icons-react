import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b819-vbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b819-vbmh"/>`,
		"fallback": "mdi:car-speed-limiter",
	});
}

export default Component;
