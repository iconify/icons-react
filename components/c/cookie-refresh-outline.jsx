import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-2-_i5gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-2-_i5gv"/>`,
		"fallback": "mdi:cookie-refresh-outline",
	});
}

export default Component;
