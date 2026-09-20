import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk3_t9boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk3_t9boi"/>`,
		"fallback": "mdi:battery-charging-low",
	});
}

export default Component;
