import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc_irebcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc_irebcl"/>`,
		"fallback": "mdi:arrow-left-bold-hexagon-outline",
	});
}

export default Component;
