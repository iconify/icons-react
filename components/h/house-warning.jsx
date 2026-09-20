import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bis6ikbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bis6ikbza"/>`,
		"fallback": "mdi:house-warning",
	});
}

export default Component;
