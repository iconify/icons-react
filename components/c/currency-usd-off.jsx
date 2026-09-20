import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3x0uu0wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3x0uu0wv"/>`,
		"fallback": "mdi:currency-usd-off",
	});
}

export default Component;
