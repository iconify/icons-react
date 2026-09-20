import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar_t8vl9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar_t8vl9h"/>`,
		"fallback": "mdi:access-point-success",
	});
}

export default Component;
