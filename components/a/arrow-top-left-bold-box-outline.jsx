import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz4u_3b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz4u_3b7a"/>`,
		"fallback": "mdi:arrow-top-left-bold-box-outline",
	});
}

export default Component;
