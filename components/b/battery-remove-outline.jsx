import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9kspab5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9kspab5o"/>`,
		"fallback": "mdi:battery-remove-outline",
	});
}

export default Component;
