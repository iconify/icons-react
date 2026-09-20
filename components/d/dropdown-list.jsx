import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0yb-g_ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0yb-g_ug"/>`,
		"fallback": "ri:dropdown-list",
	});
}

export default Component;
