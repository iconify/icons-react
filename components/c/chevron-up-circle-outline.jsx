import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_g_7jw1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_g_7jw1o"/>`,
		"fallback": "mdi:chevron-up-circle-outline",
	});
}

export default Component;
