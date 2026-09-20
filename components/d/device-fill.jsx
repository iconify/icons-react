import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orjt46b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orjt46b0c"/>`,
		"fallback": "ri:device-fill",
	});
}

export default Component;
