import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce1h9l8wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce1h9l8wk"/>`,
		"fallback": "mdi:cursor-default-gesture-outline",
	});
}

export default Component;
