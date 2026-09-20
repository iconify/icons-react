import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4-6d7bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4-6d7bpi"/>`,
		"fallback": "mdi:flag-off",
	});
}

export default Component;
