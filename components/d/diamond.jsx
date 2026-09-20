import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6lg7y29h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6lg7y29h"/>`,
		"fallback": "mdi:diamond",
	});
}

export default Component;
