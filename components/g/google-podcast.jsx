import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvw_2eb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvw_2eb5c"/>`,
		"fallback": "mdi:google-podcast",
	});
}

export default Component;
